import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ImageComponent } from './pages/search/image/image.component';
import { DetailsComponent } from './pages/search/details/details.component';
import { ResultsComponent } from './pages/search/results/results.component';
import { CriminalViewComponent } from './pages/criminal-view/criminal-view.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ImageComponent,
    DetailsComponent,
    ResultsComponent,
    CriminalViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
