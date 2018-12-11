import { Component } from '@angular/core';
import { FoodDataService } from './food-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Food application';
  public fooditems=[];
  public options=[];
  public chefs=[];
  public ambience=[];
  public showfooditems=[];
  public displaymenu:boolean=false;
  public displaychef:boolean=false;
  public displayfood:boolean=false;
  public displayambience:boolean=false;
  public value:String="default";
  constructor(foodService:FoodDataService)
  {
  this.fooditems=foodService.getFoodData();
  this.options=foodService.getOptionsData();
  this.chefs=foodService.getChefsdata();
  this.ambience=foodService.getAmbiencedata();
  this.showfooditems=foodService.getFoodItems();
  }
  DisplayData(option){
    console.log("Function called"+option);
    this.value=option;
    if(option=="Menu")
    {
     this.displaymenu=true;
     this.displaychef=false;
     this.displayfood=false;
     this.displayambience=false;
    }
    if(option=="Our Chefs")
    {
     this.displaymenu=false;
     this.displaychef=true;
     this.displayfood=false;
     this.displayambience=false;
    }
    if(option=="Food Overview")
    {
     this.displaymenu=false;
     this.displaychef=false;
     this.displayfood=true;
     this.displayambience=false;
    }
    if(option=="Ambience Overview")
    {
      this.displaymenu=false;
      this.displaychef=false;
      this.displayfood=false;
      this.displayambience=true;
    }
    }
}
