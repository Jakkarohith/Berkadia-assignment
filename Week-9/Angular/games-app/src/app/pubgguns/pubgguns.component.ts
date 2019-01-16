import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../fetch-data.service';

@Component({
  selector: 'app-pubgguns',
  templateUrl: './pubgguns.component.html',
  styleUrls: ['./pubgguns.component.css']
})
export class PubggunsComponent implements OnInit {
  private gunApiData;
  private displayGunData;
  private url="http://localhost:3000";
  private gun;
  private toggle:Boolean=true;
  constructor(private readonly gunApi:FetchDataService ) { }

  ngOnInit() {
    this.gunApi.getApiData(this.url+"/pubgguns").subscribe((res:any)=>
    {
    this.gunApiData=res.guns;
    console.log(this.gunApiData);
  })
  }
  display(gunname)
  {
   this.gun=gunname;
   this.toggle=false;
   this.gunApiData.forEach(element => {
     if(element.gun_name==this.gun)
     {
      this.displayGunData=element; 
     }     
   });
  }

}
