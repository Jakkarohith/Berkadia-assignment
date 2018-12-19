import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodDataService {

  constructor() { }
  getAmbiencedata()
  {
   return [
    {
      image:"./assets/r1.jpg"
     },
    { 
      image:"./assets/r2.jpeg"
    },
    {
     image:"./assets/r3.jpeg"
    },
    {
     image:"./assets/r4.jpeg"
    },
    {
     image:"./assets/r5.jpeg"
    },
    {
     image:"./assets/r6.jpeg"
    },
    {
     image:"./assets/r7.jpg"
    },
    {
     image:"./assets/r8.jpeg"
    },
    {
     image:"./assets/r9.jpeg"
    },
    {
     image:"./assets/r10.jpeg"
    },
    {
     image:"./assets/r11.jpeg"
    },
    {
      image:"./assets/r12.jpeg"
     },
  ]; 
  }
  getOptionsData()
  {
  return [
    {
     name:"Our Chefs",
     value:"Display"
    },
    {
      name:"Ambience Overview",
      value:"Display"
    },
    {
      name:"Food Overview",
      value:"Display"
    },
    {
      name:"Menu",
      value:"Display"
    },
  ];  
  }
  getFoodItems()
  {
    return [
       {
        name: "Chocolate-Mint Bars" ,
        image:"./assets/1.jpeg"
       },
      { 
        name:"Bourbon-Pecan Tart",
        image:"./assets/2.jpeg"
      },
      {
       name:" Raspberry-Rhubarb Pie" ,
       image:"./assets/3.jpeg"
      },
      {
       name: "Cinnamon-Apple Cake",
       image:"./assets/4.jpeg"
      },
      {
       name: "Tiramisu" ,
       image:"./assets/5.jpg"
      },
      {
       name: "Salted Caramel Ice Cream",
       image:"./assets/6.jpeg"
      },
      {
       name: "Amaretto Apple Streusel",
       image:"./assets/7.jpeg"
      },
      {
       name:  "  Espresso Crinkles",
       image:"./assets/8.jpeg"
      },
      {
       name: "  Texas Sheet Cake",
       image:"./assets/9.jpeg"
      },
      {
       name:   "  Hello Dolly Bars" ,
       image:"./assets/10.jpeg"
      },
      {
       name: "Roasted Banana Bars ",
       image:"./assets/11.jpeg"
      },
      {
        name: "",
        image:"./assets/12.jpeg"
       },
       {
        name: "",
        image:"./assets/13.jpeg"
       },
       {
        name: "",
        image:"./assets/14.jpeg"
       },
    ];
  }
  getChefsdata()
  {
    return [
      {
      name :"Vikas Kanna",
      Desc :"I'm not a chef. But I'm passionate about food - the tradition of it, cooking it, and sharing it.",
      image:"./assets/vikaskanna.jpg",
      },
      {
        name :"Sanjeev Kapoor",
        Desc :"To me, there's no great chef without a great team.",
        image:"./assets/sanjeevkapoor.jpg",
     },
     {
      name :"Ranveer brar",
      Desc :"I always had a fantasy of being a chef, because I like kitchen life.",
      image:"./assets/ranveerbrar.jpg",
      },
      {
        name :"Gaggan Anand",
        Desc :"I am a chef who happens to appear on the telly, that's it.",
        image:"./assets/gaggananand.jpg",
      },   
    ];
  }
 getFoodData()
  {
    return [
      {
        image:"./assets/1.jpeg",
       name: "Chocolate-Mint Bars" ,
       desc:"You'll love these Chocolate-Mint Bars if you're a big fan of the thin chocolate-mint Girl Scout cookies or Andes candies. Refrigerating the bars allows the mint layer and glaze to set properly. For a more grown-up taste, you can substitute dark chocolate chips for some or all of the semisweet chocolate chips in the glaze",
       price :300
      },
     { 
      image:"./assets/2.jpeg",
       name:"Bourbon-Pecan Tart",
       desc:"Pecan pie is often purely sweet with no undertones, but the bourbon, molasses, and chocolate in this beautiful centerpiece dessert all add complexity of flavor. It's also somewhat thinner than a pie, meaning you get more buttery, flaky crust in each bite. Tip: Make the tart a day ahead, and store it in the refrigerator. You can use a 9-inch pie plate instead: simply roll the dough to a 13-inch circle, fold the edges under, and flute.       ",
       price :330
     },
     {
      image:"./assets/3.jpeg",
      name:" Raspberry-Rhubarb Pie" ,
      desc:"With a presence as large as its namesake state, this humble, easy-to-prepare cake made it all the way to the finals for our best chocolate recipe bake-off. Since it first appeared in the magazine 12 years ago, it's been a staff and reader favorite. This recipe uses butter and buttermilk in quantities that give it the right indulgently moist texture and rich flavor, but keep a serving's fat at just 10 grams and calories at about 300.'      ",
      price :200
     },
     {
      image:"./assets/4.jpeg",
      name: "Cinnamon-Apple Cake",
      desc:"Reviewer dmpeace received a little help with these in the kitchen: These were a fabulous treat and fun to make with my 2 1/2 year old. She got a kick out of sprinkling the toppings. Very rich, and very sweet   ",
      price : 390
     },
     {
      image:"./assets/5.jpg",
      name: "Tiramisu" ,
      desc:"Tiramisu is Italian for lift me up And its indulgent creamy, mocha-tinged flavor is indeed uplifting. With layers of ladyfingers, coffee, mascarpone cheese, and shaved or grated chocolate, traditional tiramisu is a cross between a trifle and bread pudding. Our lightened version is less than 300 calories per serving, and makes for a sophisticated dinner-party treat. ",
      price :1600
     },
     {
      image:"./assets/6.jpeg",
      name: "Salted Caramel Ice Cream",
      desc:"This lighter twist on traditional carrot cake features a tender cake packed with grated carrot, juicy pineapple, flaked coconut, and chopped pecans. Cream cheese frosting and a garnish of grated carrot tops the cake.",
      price :100
     },
     {
      image:"./assets/7.jpeg",
      name: "Amaretto Apple Streusel",
      desc:"Put those ripe, speckled bananas to good use. This dish starts with roasting bananas which adds caramelized notes to their tropical sweetness. The bananas flavor the light-and-fluffy bars, which are topped with cream cheese icing and chopped pecans for the perfect amount of tanginess and crunch  ",
      price :399
     },
     {
      image:"./assets/8.jpeg",
      name:  "  Espresso Crinkles",
      desc:"These bar cookies—also known as seven-layer bars—take less than 30 minutes to make and call for just 8 ingredients, making Hello Dolly Bars the perfect dessert for taking along, well, just about anywhere!      ",
      price :325
     },
     {
      image:"./assets/9.jpeg",
      name: "  Texas Sheet Cake",
      desc:"This is a namesake because the recipe developer’s mom baked it for his birthday every year. We've adapted this recipe to trim the fat and calories, and it's still a moist, lemony treat.     ",
      price :370
     },
     {
      image:"./assets/10.jpeg",
      name:   "  Hello Dolly Bars" ,
      desc:"OUTSTANDING!!! said MegLee. I made this as a birthday treat for my mother, everyone loved it, especially her!!! I can't wait for an occasion to make this again.   ",
      price :210
     },
     {
      image:"./assets/11.jpeg",
      name: "Roasted Banana Bars ",
      desc:"Nestled in a creamy filling and crumbly graham cracker crust, strawberries shine in this delectable tart.      ",
      price :500
     },
    ] ;
  }
}