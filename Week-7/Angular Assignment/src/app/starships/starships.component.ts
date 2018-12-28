import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StarwarsService } from '../starwars.service';


@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {

  public episode_num:number;
  public starwardata=[];
  public starwarshipdata=[];
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
        this.starwardata=res.results[i].starships;
        this.starwardata.forEach(element => {
          this.starwar.fetchstardata(element).subscribe((res:any)=>
          {
          this.starwarshipdata[k]=res;
          k++;  
          });     
        });
        console.log(this.starwardata);
        console.log(typeof this.starwardata)
      } 
    }  
    });
    console.log(this.starwarshipdata);
  }
}
