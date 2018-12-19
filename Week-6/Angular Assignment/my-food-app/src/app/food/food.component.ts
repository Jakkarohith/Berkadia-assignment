import { Component, OnInit } from '@angular/core';
import {FoodDataService} from "src/app/food-data.service"

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
  public fooditems=[];
  constructor(foodService:FoodDataService)
  {
   this.fooditems=foodService.getFoodItems();
   console.log(this.fooditems)
  }

  ngOnInit() {
  }

}
