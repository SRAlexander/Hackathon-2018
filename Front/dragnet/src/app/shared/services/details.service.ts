import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { AppConfig } from '../../app.config';

@Injectable()
export class DetailsService {

  private _apiLocation :string = "";

  constructor(private _http: HttpClient, private config : AppConfig) {
      let host:string = config.getConfig('apiRoot');
      this._apiLocation= host + "login"
   }

   //Todo build on this
   private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }

}