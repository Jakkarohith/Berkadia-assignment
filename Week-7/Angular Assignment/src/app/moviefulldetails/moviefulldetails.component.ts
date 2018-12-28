import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StarwarsService } from '../starwars.service';

@Component({
  selector: 'app-moviefulldetails',
  templateUrl: './moviefulldetails.component.html',
  styleUrls: ['./moviefulldetails.component.css']
})
export class MoviefulldetailsComponent implements OnInit {
public episode_num:number;
public starwardata;
public image1;
public image2;
public image3;

  constructor(private routedata:ActivatedRoute,private starwar:StarwarsService,private router:Router) { }
  ngOnInit() {
    this.routedata.paramMap
    .subscribe(params=>
     {
     console.log(params.get("episode_id"));
     this.episode_num=+params.get("episode_id");
     });
    this.starwar.fetchstardata("https://swapi.co/api/films").subscribe((res:any)=>
    {
    for(let i=0;i<7;i++)
    {
      if(res.results[i].episode_id==this.episode_num)
      {
        this.starwardata=res.results[i];
        console.log(this.starwardata);
        console.log(typeof this.starwardata)
      } 
    }  
    });
    switch(this.episode_num)
    {
     case 1 : this.image1="./assets/ep1.jpg";
              this.image2="./assets/ep2.jpg";
              this.image3="./assets/ep3.jpg";
              break; 
     case 2 : this.image1="./assets/ep4.jpg";
              this.image2="./assets/ep5.jpg";
              this.image3="./assets/ep6.jpg";  
              break;
     case 3 : this.image1="./assets/ep7.jpg";
              this.image2="./assets/ep8.jpg";
              this.image3="./assets/ep9.jpg";
              break;  
     case 4 : this.image1="./assets/ep10.jpg";
              this.image2="./assets/ep11.jpg";
              this.image3="./assets/ep12.jpg";
               break; 
     case 5 : this.image1="./assets/ep13.jpg";
              this.image2="./assets/ep14.png";
              this.image3="./assets/ep15.jpg";
              break;  
     case 6 : this.image1="./assets/ep16.jpg";
              this.image2="./assets/ep17.jpg";
               this.image3="./assets/ep18.jpg";
              break;      
     case 7 : this.image1="./assets/ep19.jpg";
              this.image2="./assets/ep20.jpg";
              this.image3="./assets/ep21.png";
              break;                      
     default : console.log("bye");
     break;        
    }
  }
  goHome()
  {
   this.router.navigateByUrl("home");
  }
  viewCharacterdetails(epid)
  {
   this.router.navigateByUrl("characters/"+this.episode_num);
  }
  viewPlanetDetails(epid)
  {
   this.router.navigateByUrl("planets/"+this.episode_num);
  }
  viewStarshipsDetails(epid)
  {
   this.router.navigateByUrl("starships/"+this.episode_num);
  }
}
