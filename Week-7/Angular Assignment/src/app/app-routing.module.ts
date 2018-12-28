import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { MoviefulldetailsComponent } from './moviefulldetails/moviefulldetails.component';
import { CharactersComponent } from './characters/characters.component';
import { PlanetsComponent } from './planets/planets.component';
import { StarshipsComponent } from './starships/starships.component';
const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'moviedetails/:episode_id',component:MoviefulldetailsComponent},
  {path:'characters/:episode_id',component:CharactersComponent},
  {path:'planets/:episode_id',component:PlanetsComponent},
  {path:'starships/:episode_id',component:StarshipsComponent},
  {path:'**',component:ErrorPageComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
