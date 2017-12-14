import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { REST_API } from './api';

@Injectable()
export class UtilityService {
  public sendEmailURL = REST_API.endpoint + `/api/mail/`;

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
