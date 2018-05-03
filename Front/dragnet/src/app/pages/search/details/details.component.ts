import { Component, OnInit } from "@angular/core";
import { SearchDetails } from "../../../shared/models/input/searchDetailsClass";
import { SearchService } from "../../../shared/services/search.service";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: "dn-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.css"]
})
export class DetailsComponent implements OnInit {
  model: SearchDetails = new SearchDetails();

  constructor(
    private spinner: NgxSpinnerService,
    private _searchService: SearchService
  ) {}

  ngOnInit() {}

  submit() {
    /** spinner starts on init */
    this.spinner.show();
    this._searchService.searchByDetails(null).subscribe(
      response => {
        setTimeout(() => {
          /** spinner ends after 5 seconds */
          this.spinner.hide();
        }, 5000);

        if (response.length == 1) {
          //redirect to person
          console.log("One result");
        }

        if (response.length > 1) {
          //redirect to results view
          console.log("More than one result");
        }
      },
      error => {
        console.log("Error on details search");
      }
    );
  }
}
