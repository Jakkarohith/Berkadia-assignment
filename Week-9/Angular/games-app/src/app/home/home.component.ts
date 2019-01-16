import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private gamesApidata;
  private url="http://localhost:3000";
  constructor(private readonly gameApi:FetchDataService,private router:Router) { }
  ngOnInit() {
    this.gameApi.getApiData(this.url+"/games").subscribe((res:any)=>
    {
    this.gamesApidata=res.games;
    console.log(this.gamesApidata);
  })
  }
  detailGameData(rank)
  {
  this.router.navigateByUrl("fulldetails/"+rank)  
  }
  }

