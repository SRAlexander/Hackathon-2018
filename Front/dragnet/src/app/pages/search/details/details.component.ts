import { Component, OnInit } from '@angular/core';
import { SearchDetails } from '../../../shared/models/input/searchDetailsClass';

@Component({
  selector: 'dn-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  model : SearchDetails = new SearchDetails();

  constructor() { }

  ngOnInit() {
  }

  submit() {
    var z  = "here";
    console.log("submitted")
    console.log(this.model.surname)
  }

}
