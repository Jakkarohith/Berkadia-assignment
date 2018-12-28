import { Component, OnInit } from '@angular/core';
import { StarwarsService } from './starwars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
 })
export class AppComponent implements OnInit {
  public  starwardata;
  title:string="starwars";
  constructor(private starwar:StarwarsService){

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
