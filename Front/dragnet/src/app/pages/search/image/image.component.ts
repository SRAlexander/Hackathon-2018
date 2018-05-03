import { Component, OnInit } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";
import { WebcamImage } from "ngx-webcam";
import { SearchService } from "../../../shared/services/search.service";
import { ImageSearchDetails } from "../../../shared/models/input/imageSearchDetailsClass";
import { Router } from "@angular/router";

@Component({
  selector: "dn-image",
  templateUrl: "./image.component.html",
  styleUrls: ["./image.component.css"]
})
export class ImageComponent implements OnInit {
  webcamImage: WebcamImage = null;
  showWebcam: boolean = true;

  constructor(private _searchService: SearchService, private router: Router) {}

  ngOnInit() {}

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();

  public triggerSnapshot(): void {
    this.trigger.next();
  }

  public submitSnapshot(): void {
    let imageSearchDetails = new ImageSearchDetails();
    imageSearchDetails.imageDetails = this.webcamImage.imageAsDataUrl;
    imageSearchDetails.details = "Dummy Information for now";
    this._searchService.searchByImage(imageSearchDetails).subscribe(
      response => {
        //let result = response.identityguid;
        this.router.navigate(["criminalView", { persionId: 1 }]);
      },
      error => {
        console.log(error);
      }
    );
  }

  public handleImage(webcamImage: WebcamImage): void {
    this.webcamImage = webcamImage;
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }
}
