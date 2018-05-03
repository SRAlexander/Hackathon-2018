import { Component, OnInit } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { LoginService } from "../../shared/services/login.service";
import { Router } from "@angular/router";

@Component({
  selector: "dn-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private spinner: NgxSpinnerService, private _loginService : LoginService, private router : Router) {}

  ngOnInit() {}

  submit() {
    /** spinner starts on init */
    this.spinner.show();
    this._loginService.login("SuperUser").subscribe(
      response => { this.router.navigate([""]);},
      error => {}
    );
  }
}
