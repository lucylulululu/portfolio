import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';


@Injectable()
export class UtilityService {
  public sendEmailURL = 'http://127.0.0.1:8360/api/mail/';

  constructor(public http:Http){}

  public sendEmail (msg){
    return this.http
            .post(this.sendEmailURL,msg)
            .map((response: Response) => {
              let res = response.json();
              return response;
            });
  }

}
