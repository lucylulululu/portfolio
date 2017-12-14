import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Post } from '../model/post';

@Injectable()
export class PostService {
  public postURL = `/api/blog/`;
  public postTopListURL = `/api/blog/?top=3`;

  constructor(private http: Http) {
  }

  public getPostList(searchText: string,page:number=1):Observable<Post[]>{
    let url = this.postURL;
    let params = new URLSearchParams();
    if (searchText) {
      params.set('searchText',searchText);
      console.log(`searchText=${searchText}`);
    }
    //params.set('page',String(page));
    return this.http
               .get(url,{search:params})
               .map((res:Response) => {
                   let result=res.json();
                   console.log(result);
                   return result;
               })
               .catch((error:any) => Observable.throw(error || 'Server error'));
  }


  public getPost(id:number):Observable<Post>{
      return 	this.http
      			.get(this.postURL+id)
              	.map((res: Response) => res.json());
  }

  public getPostTable(){
      return this.http.get(this.postURL)
        .map((res:Response) => res.json())
        .catch((error:any) => Observable.throw(error || 'Server error'));
  }

  public getTopPost():Observable<Post[]> {
    return this.http
               .get(this.postTopListURL)
               .map((res:Response) => {
                   let result=res.json();
                   console.log(result);
                   return result;
               })
               .catch((error:any) => Observable.throw(error || 'Server error'));
  }

  public doPost(post){
    return this.http
            .post(this.postURL,post)
            .map((response: Response) => {
              return response;
            })
            .subscribe(
                data => {
                    console.log(" write post success "+data);
                },
                error => {
                    console.error(error);
                }
            );
  }

  public del(postId: number):Observable<any>{
      return this.http.delete(this.postURL)
          .map((res: Response) => res.json());
  }

  public toEdit(postId: number):Observable<any>{
      return this.http.get(this.postURL)
          .map((res: Response) => res.json());
  }
}
