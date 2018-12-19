import { Component, OnInit } from '@angular/core';
import { Router, RouterLinkWithHref } from '@angular/router';
import {FoodDataService} from "src/app/food-data.service"

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public fooditems=[];
  constructor(foodService:FoodDataService,private router:Router) { 

  this.fooditems=foodService.getFoodData();
  }
  ngOnInit() {
  }
orderitem(order:HTMLInputElement){
  let ordernum:number=+order.value;
if(ordernum!=undefined&&ordernum>0&&ordernum<12)
{
this.router.navigateByUrl("/displayitem/"+ordernum);
}
else
{
  alert("Enter the valid serial number"); 
}
}
}
