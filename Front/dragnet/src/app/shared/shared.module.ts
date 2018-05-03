import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DetailsService } from './services/details.service';
import { ImageService } from './services/image.service';
import { LoginService } from './services/login.service';
import { SearchService } from './services/search.service';

import {WebcamModule} from 'ngx-webcam';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    WebcamModule
  ],
  declarations: [],
  providers : [DetailsService, ImageService, LoginService, SearchService]
})
export class SharedModule { }
