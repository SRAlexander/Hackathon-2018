import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { AppConfig } from "../../app.config";

@Injectable()
export class ImageService {
  private _apiLocation: string = "";

  constructor(private _http: HttpClient, private config: AppConfig) {
    let host: string = config.getConfig("apiRoot");
    this._apiLocation = host;
  }


  login(name: string){

  }
  
  //Todo build on this
  private handleError(err: HttpErrorResponse) {
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
