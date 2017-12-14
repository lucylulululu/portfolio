import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Product} from '../model/product';
import { REST_API } from './api';

@Injectable()
export class ProductService {
  public productURL = REST_API.endpoint + `/api/product/`;
  public productTopListURL = REST_API.endpoint + `/api/product/?top=3`;

  constructor(private http: Http) {
  }

  public getAllProducts():Observable<Product[]> {
    let url = this.productURL;
    return this.http
               .get(url)
               .map((res:Response) => {
                   let result=res.json();
                   console.log(result);
                   return result;
               })
               .catch((error:any) => Observable.throw(error || 'Server error'));
  }

  public getProductTable(){
      return this.http.get(this.productURL)
        .map((res:Response) => res.json())
        .catch((error:any) => Observable.throw(error || 'Server error'));
  }

  public getTopProducts():Observable<Product[]> {
    let url = this.productTopListURL;
    return this.http
               .get(url)
               .map((res:Response) => {
                   let result=res.json();
                   console.log(result);
                   return result;
               })
               .catch((error:any) => Observable.throw(error || 'Server error'));
  }

  public getProduct(id:number):Observable<Product>{
      return 	this.http
            .get(this.productURL+id)
                .map((res: Response) => res.json());
  }


  public doPost(post){
      return this.http
              .post(this.productURL,post)
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
}
