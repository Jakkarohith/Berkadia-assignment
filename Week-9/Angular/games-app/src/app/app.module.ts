import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FulldetailsGamesComponent } from './fulldetails-games/fulldetails-games.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeCarouselComponent } from './home-carousel/home-carousel.component';
import { PubggunsComponent } from './pubgguns/pubgguns.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FulldetailsGamesComponent,
    ErrorPageComponent,
    HomeCarouselComponent,
    PubggunsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
