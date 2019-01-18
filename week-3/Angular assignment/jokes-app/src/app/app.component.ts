import { Component, OnInit } from '@angular/core';
import { FetchjokedataService } from './fetchjokedata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'jokes-app';
  private jokesData;
  private toggle:Boolean=false;
  constructor(private readonly jokeApi:FetchjokedataService ){}
   ngOnInit()
    {
     this.jokeApi.getJokeData("https://official-joke-api.appspot.com/jokes/ten")
     .subscribe((res:any)=>
     {
     this.jokesData=res;
     console.log(this.jokesData);
     });     
    }
 refresh()
   {
    location.reload(true);
   }       
}
