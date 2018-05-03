import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";
import { AppConfig } from "../../app.config";
import { SearchDetails } from "../models/input/searchDetailsClass";
import { ImageSearchDetails } from "../models/input/imageSearchDetailsClass";

@Injectable()
export class SearchService {
  private _apiLocation: string = "";

  constructor(private _http: HttpClient, private config: AppConfig) {
    let host: string = config.getConfig("apiRoot");
    this._apiLocation = host;
  }

  searchByImage(imageSearchDetails: ImageSearchDetails) {
    //console.log("Searching by image");
    //console.log("Image Data: " + imageSearchDetails.imageDetails);
    //console.log("Description: " + imageSearchDetails.details);
    var postObject = {
      base64String: imageSearchDetails.imageDetails
    };
    let body = JSON.stringify(postObject);
    let headers = new HttpHeaders({ "Content-Type": "application/json" });
    let options = { headers: headers };

    return this._http
      .post<any>(
        this._apiLocation + "Scoundrels/Find-Scoundrels-By-Image",
        body,
        options
      )
      .do(data => {})
      .catch(this.handleError);
  }

  searchByDetails(details: SearchDetails) {
    let body = JSON.stringify(SearchDetails);
    let headers = new HttpHeaders({ "Content-Type": "application/json" });
    let options = { headers: headers, search: body };

    return this._http
      .get<any>(this._apiLocation + "Scoundrels/Find-Scoundrels", options)
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
