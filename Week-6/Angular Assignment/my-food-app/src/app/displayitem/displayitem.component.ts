import { FoodDataService } from 'src/app/food-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-displayitem',
  templateUrl: './displayitem.component.html',
  styleUrls: ['./displayitem.component.css']
})
export class DisplayitemComponent implements OnInit {
  private displayfood=[];
  private orderid:number;
  constructor(foodService:FoodDataService,private route:ActivatedRoute)
  {
   this.displayfood=foodService.getFoodData();
   console.log(this.displayfood)
  }
  ngOnInit() {
    this.route.paramMap
      .subscribe(params=>{
       this.orderid=+params.get("orderid");
      });

  }

}
