import { Component, OnInit ,Output, EventEmitter} from '@angular/core';
import { elementStart } from '@angular/core/src/render3';

@Component({
  selector: 'food-cart',
  templateUrl: './food-cart.component.html',
  styleUrls: ['./food-cart.component.css']
})
export class FoodCartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  resultadd:number=0;
  resultremove:number=0;
  totalCartValue:number=0;
  AddItemCounter(result) {
     if(result>=this.resultremove)
     {
      this.totalCartValue =result;
      this.resultadd=result;
     }
     else{
       this.totalCartValue=0;
       this.resultadd=0;
     }
    }
  RemoveItemCounter(resultRemove) {
    this.resultremove=resultRemove;
    if(resultRemove>this.resultadd)
    {
    this.resultremove=0;
    this.totalCartValue=0;  
    }
    else{
      this.totalCartValue=this.resultadd-1;
      this.resultadd=this.resultadd-1;
      this.resultremove=this.resultremove-1;
    }
      }
  items:{name: string,desc:string, image: string }[]=[
    {
     name: "Chocolate-Mint Bars" ,
     desc: "You'll love these Chocolate-Mint Bars if you're a big fan of the thin chocolate-mint Girl Scout cookies or Andes candies.",
     image: "./assets/1.jpeg"
    },
   { 
     name:"Bourbon-Pecan Tart",
     desc:"Studded with plump, juicy fresh berries, these cupcakes are fun for birthdays and special occasions. Be as creative cupcakes. ",
     image: "./assets/2.jpeg"
   },
   {
    name:" Raspberry-Rhubarb Pie" ,
    desc:" Sweet raspberries do that job perfectly here, while a splash of crème de cassis adds even berry flavor. A slice of  vanilla ice cream.",
    image :"./assets/3.jpeg"
   },
   {
    name: "Cinnamon-Apple Cake",
    desc:"Decadently rich, this top-rated recipe was crowned the winner of our best chocolate recipes.Luxurious pockets of melty chocolate  brownies.",
    image :"./assets/4.jpeg"
   },
   {
    name: "Tiramisu" ,
    desc:"This is a namesake because the recipe developer’s mom baked it for his birthday every year. We've adapted  fat and calories.",
    image :"./assets/5.jpg"
   },
   {
    name: "Salted Caramel Ice Cream",
    desc:"Our Blueberry-Peach Cobbler is like a blueberry muffin canoodling with fresh peaches.Aren't superripe for this when cooked. ",
    image :"./assets/6.jpeg"
   },
   {
    name: "Amaretto Apple Streusel",
    desc:"Put those ripe, speckled bananas to good use. This dish starts with roasting bananas which adds caramelized notes to their sweetness.",
    image :"./assets/7.jpeg"
   },
   {
    name:  "  Espresso Crinkles",
    desc:"Nestled in a creamy filling and crumbly graham cracker crust, strawberries shine in this delectable tart.",
    image :"./assets/8.jpeg"
   },
   {
    name: "  Texas Sheet Cake",
    desc:"These bar cookies—also known as seven-layer bars—take less than 30 minutes to make and call for just 8 ingredients, making Hello Dolly Bars",
    image :"./assets/9.jpeg"
   },
   {
    name:   "  Hello Dolly Bars" ,
    desc:"With a presence as large as its namesake state, this humble, easy-to-prepare cake made it all the way to the finalsrecipe bake-off.",
    image :"./assets/10.jpeg"
   },
   {
    name: "Roasted Banana Bars ",
    desc:"Unsweetened chocolate and instant espresso powder give depth of flavor to these sophisticated cookies. A dredge in powdered sugar.",
    image :"./assets/11.jpeg"
   },
   {
    name:  "Blueberry-Peach Cobbler" ,
    desc:"This reader recipe was developed by Marcie Dixon of Arlington Heights, Illinois, who recommends using bittersweet chocolate instead cookies.",
    image : "./assets/12.jpeg"
   },
   {
    name: " Nathan’s Lemon Cake" ,
    desc:"In this rich cheesecake, we use the entire vanilla bean, so none of it is wasted: The seeds flavor the cheesecake, flavor the topping.", 
    image :"./assets/13.jpeg"
   },
   {
    name: "Fudge-Walnut Brownies" ,
    desc:"Top tender apple cupcakes with a sweet and crunchy topping of brown sugar and almonds, then drizzle with a powdered sugar glaze.",
    image :"./assets/14.jpeg"
   },
  ]; 
 
}
