import { Component, OnInit } from '@angular/core';
import { FoodDataService } from 'src/app/food-data.service';

@Component({
  selector: 'app-chefs',
  templateUrl: './chefs.component.html',
  styleUrls: ['./chefs.component.css']
})
export class ChefsComponent implements OnInit {
  public chefs=[];
  constructor(foodService:FoodDataService) { 

  this.chefs=foodService.getChefsdata();
  }

  ngOnInit() {
  }

}
