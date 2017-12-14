import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Http, Headers, Response } from '@angular/http';
import { User } from '../model/user';

import 'rxjs/add/operator/map';
import { REST_API } from './api';

@Injectable()
export class UserService {
  public userLoginURL = REST_API.endpoint + `/api/user/`;
  public userLoginFacebookURL = 'http://localhost:8899/auth/facebook';
  public subject: Subject<User> = new Subject<User>();

  constructor(public http:Http){}

  public get currentUser():Observable<User>{
      return this.subject.asObservable();
  }

  public getUser(id:number):Observable<User>{
      return 	this.http
            .get(this.userLoginURL+id)
                .map((res: Response) => res.json());
  }

  public login(user:User){
    return this.http
            .post(this.userLoginURL,user)
            .map((response: Response) => {
              let user = response.json();
              if(user){
                console.log("user object>"+ JSON.stringify(user));
                localStorage.setItem("currentUser",JSON.stringify(user));
                this.subject.next(Object.assign({},user));
              }
              return response;
            });
  }

  public loginFacebook(user:User){
    return this.http
            .post(this.userLoginFacebookURL,user)
            .map((response: Response) => {
              let user = response.json();
              if(user){
                console.log("user object>"+ JSON.stringify(user));
                localStorage.setItem("currentUser",JSON.stringify(user));
                this.subject.next(Object.assign({},user));
              }
              return response;
            });
  }

  public logout():void{
    localStorage.removeItem("currentUser");
    this.subject.next(Object.assign({}));
  }
}
