import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FulldetailsGamesComponent } from './fulldetails-games/fulldetails-games.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
import { PubggunsComponent } from './pubgguns/pubgguns.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'homepage',
    pathMatch:'full'
  },
  {
    path:'homepage',
    component:HomeCarouselComponent
  },
  {
    path:'pubg',
    component:PubggunsComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'fulldetails/:game_id',component:FulldetailsGamesComponent
  },
  {
  path:'**',
  component:ErrorPageComponent
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
