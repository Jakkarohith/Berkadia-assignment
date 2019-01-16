import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FetchDataService } from '../fetch-data.service';

@Component({
  selector: 'app-fulldetails-games',
  templateUrl: './fulldetails-games.component.html',
  styleUrls: ['./fulldetails-games.component.css']
})
export class FulldetailsGamesComponent implements OnInit {

  constructor(private router:Router,private readonly gameApi:FetchDataService,private readonly routedata:ActivatedRoute) { }
  private id:number;
  private playerApidata;
  private url="http://localhost:3000";  
  ngOnInit() 
  {
    this.routedata.paramMap
    .subscribe(params=>
     {
     console.log(params.get("game_id"));
     this.id=+params.get("game_id");
     });
    this.gameApi.getApiData(this.url+"/players/"+this.id).subscribe((res:any)=>
    {
    this.playerApidata=res.players;
    console.log(this.playerApidata);
    });  
  }
  goHome()
  {
    this.router.navigateByUrl("home");
  }
}
