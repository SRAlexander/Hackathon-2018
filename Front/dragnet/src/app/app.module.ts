import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ImageComponent } from './pages/search/image/image.component';
import { DetailsComponent } from './pages/search/details/details.component';
import { ResultsComponent } from './pages/search/results/results.component';
import { CriminalViewComponent } from './pages/criminal-view/criminal-view.component';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { APP_INITIALIZER } from '@angular/core';
import { AppConfig }       from './app.config';

function initConfig(config: AppConfig){
  return () => config.load() 
 }


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ImageComponent,
    DetailsComponent,
    ResultsComponent,
    CriminalViewComponent,
    HomeComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule,
    AngularFontAwesomeModule
  ],
  providers: [
    AppConfig,
    { provide: APP_INITIALIZER, useFactory: initConfig, deps: [AppConfig], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
