import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FoodDataService } from './food-data.service';
import { HomeComponent } from './home/home.component';
import { ChefsComponent } from './chefs/chefs.component';
import { FoodComponent } from './food/food.component';
import { AmbienceComponent } from './ambience/ambience.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AuthenticationService } from './authentication.service';
import { DisplayitemComponent } from './displayitem/displayitem.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChefsComponent,
    FoodComponent,
    AmbienceComponent,
    MenuComponent,
    PagenotfoundComponent,
    DisplayitemComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( [
      { path: '', 
        redirectTo: 'home', 
        pathMatch: 'full' 
      },
      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'chefs',
        component: ChefsComponent,
        canActivate:[AuthenticationService]
      },
      {
        path:'food',
        component:FoodComponent,
        canActivate:[AuthenticationService]
      },
      {
        path:'ambience',
        component:AmbienceComponent,
        canActivate:[AuthenticationService]
      },
      {
        path:'menu',
        component:MenuComponent,
        canActivate:[AuthenticationService]
      },
      {
        path:'displayitem/:orderid',
        component:DisplayitemComponent,
        canActivate:[AuthenticationService]
      },
      {
        path:'**',
        component:PagenotfoundComponent
      }
   ])
  ],
  providers: [FoodDataService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
