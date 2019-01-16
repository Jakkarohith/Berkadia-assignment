import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.component.html',
  styleUrls: ['./home-carousel.component.css']
})
export class HomeCarouselComponent implements OnInit {

  constructor(private readonly router:Router) { }

  ngOnInit() {
  }
navigate()
{
 this.router.navigateByUrl("home"); 
}
}
