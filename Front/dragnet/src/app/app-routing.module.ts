import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./pages/login/login.component";
import { HomeComponent } from "./pages/home/home.component";
import { DetailsComponent } from "./pages/search/details/details.component";
import { ImageComponent } from "./pages/search/image/image.component";
import { CriminalViewComponent } from "./pages/criminal-view/criminal-view.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "detailsSearch", component: DetailsComponent },
  { path: 'detailsSearch', component: DetailsComponent},
  { path: "imageSearch", component: ImageComponent },
  { path: "criminalView/:personId/:personGuid", component: CriminalViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
