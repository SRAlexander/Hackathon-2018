import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { AppConfig } from '../../app.config';
@Injectable()
export class LoginService {

  private _apiLocation :string = "";

  constructor(private _http: HttpClient, private config : AppConfig) {
      let host:string = config.getConfig('apiRoot');
      this._apiLocation= host + "authentication/"
   }

   //Todo build on this
   private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }

  login(name: string){
    let headers = new HttpHeaders({ "Content-Type": "application/json" });
    let options = { headers: headers};

    return this._http
      .post<any>(this._apiLocation + "login?name=" + name, options)
      .do(data => {
        //TODO What?
      })
      .catch(this.handleError);
    }
}
