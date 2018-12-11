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
       name: "Chocolate-Mint Bars" ,
       price :"300/-"
      },
     { 
       name:"Bourbon-Pecan Tart",
       price :"330/-"
     },
     {
      name:" Raspberry-Rhubarb Pie" ,
      price :"200/-"
     },
     {
      name: "Cinnamon-Apple Cake",
      price :"390/-"
     },
     {
      name: "Tiramisu" ,
      price :"1600/-"
     },
     {
      name: "Salted Caramel Ice Cream",
      price :"100/-"
     },
     {
      name: "Amaretto Apple Streusel",
      price :"399/-"
     },
     {
      name:  "  Espresso Crinkles",
      price :"325/-"
     },
     {
      name: "  Texas Sheet Cake",
      price :"370/-"
     },
     {
      name:   "  Hello Dolly Bars" ,
      price :"210/-"
     },
     {
      name: "Roasted Banana Bars ",
      price :"500/-"
     },
    ] ;
  }
}
