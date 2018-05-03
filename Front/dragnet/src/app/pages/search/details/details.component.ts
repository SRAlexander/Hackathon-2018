import { Component, OnInit } from '@angular/core';
import { SearchDetails } from '../../../shared/models/input/searchDetailsClass';
import { SearchService } from '../../../shared/services/search.service';

@Component({
  selector: 'dn-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  model : SearchDetails = new SearchDetails();

  constructor(private _searchService : SearchService) { 

  }

  ngOnInit() {
  }

  submit() {
    this._searchService.searchByDetails(null)
    .subscribe(
      response => {
        if (response.length == 1 ){
          //redirect to person
        }

        if (response.length > 1){
          //redirect to results view
        }

        console.log("No results")
      },
      error => {
        console.log("Error on details search");
      }
    );
  }

}
