import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../starwars.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public  starwardata;
  title:string="starwars";
  constructor(private starwar:StarwarsService,private router:Router){
  }
  viewMoviedetails(epid)
  {
  this.router.navigateByUrl("moviedetails/"+epid);
  }
  ngOnInit()
  {
  this.starwar.fetchstardata("https://swapi.co/api/films").subscribe((res:any)=>
  {
    this.starwardata=res.results;
    console.log(this.starwardata);
  })
  }
}
