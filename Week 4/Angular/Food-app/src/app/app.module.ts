import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FoodItemsComponent } from './food-items/food-items.component';
import { FoodCartComponent } from './food-cart/food-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodItemsComponent,
    FoodCartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
