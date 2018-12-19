import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FoodDataService } from './food-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 constructor(private router:Router){}
  login()
  {
    localStorage.setItem("Login","true");
  }
  logout()
  {
    localStorage.setItem("Login","false");
  }
}