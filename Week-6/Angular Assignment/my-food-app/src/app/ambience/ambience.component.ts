import { Component, OnInit } from '@angular/core';
import {FoodDataService} from "src/app/food-data.service";
@Component({
  selector: 'app-ambience',
  templateUrl: './ambience.component.html',
  styleUrls: ['./ambience.component.css']
})
export class AmbienceComponent implements OnInit {

  public ambience=[];
  constructor(foodService:FoodDataService) { 

  this.ambience=foodService.getAmbiencedata();
  console.log(this.ambience)
  }
  ngOnInit() {
  }

}
