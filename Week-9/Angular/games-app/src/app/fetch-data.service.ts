import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  constructor(private readonly http:HttpClient) { }
  getApiData( apiUrl:string)
    {
     return this.http.get(apiUrl);
    }
  
}
