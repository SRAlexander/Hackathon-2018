import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, ActivatedRoute} from '@angular/router';
import { DetailsService } from '../../shared/services/details.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'dn-criminal-view',
  templateUrl: './criminal-view.component.html',
  styleUrls: ['./criminal-view.component.css']
})
export class CriminalViewComponent implements OnInit {

  personId : string;
  personGuid : string;
  scoundrel : any;

  constructor(private router: ActivatedRoute, private _detailsService : DetailsService) { 
    this.personId = this.router.snapshot.params.personId;
    this.personGuid = this.router.snapshot.params.personGuid;
  }

  ngOnInit() {
    this._detailsService.GetScoundrel({
        policeId : this.personId, 
        faceId: this.personGuid
    }).subscribe(
      response => {this.scoundrel = response}
    )
  }

}
