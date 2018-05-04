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
      this._apiLocation= host + "scoundrels/"
   }

   GetScoundrel(details: any) {
    let body = JSON.stringify(details);
    let headers = new HttpHeaders({ "Content-Type": "application/json" });
    let options = { headers: headers};

    let calcInt = parseInt(JSON.parse(details.policeId.replace(/'/g, "\"")).id) + 103;
    console.log(calcInt);
    console.log(details.policeId.replace("'", "\""));
    return this._http
      .get<any>(this._apiLocation + "Get-Scoundrel?policeId=" + calcInt, options)
      .do(data => {
        //TODO What?
      })
      .catch(this.handleError);
  }
   
   //Todo build on this
   private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }

}
