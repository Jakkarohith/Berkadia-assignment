import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StarwarsService } from '../starwars.service';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  public episode_num:number;
  public starwardata=[];
  public starwarcharacterdata=[];
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
        let k=0;
        this.starwardata=res.results[i].characters;
        this.starwardata.forEach(element => {
          this.starwar.fetchstardata(element).subscribe((res:any)=>
          {
          this.starwarcharacterdata[k]=res;
          k++;  
          });     
        });
        console.log(this.starwardata);
        console.log(typeof this.starwardata)
      } 
    }  
    });
    console.log(this.starwarcharacterdata);
  }
  goHome()
  {
   this.router.navigateByUrl("home");
  }
  viewPlanetDetails(epid)
  {
     this.router.navigateByUrl("planets/"+this.episode_num);
   }  
}
