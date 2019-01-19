import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuestionsDataService {

  constructor(private http:HttpClient) { }
  getQuestionsData(apiUrl)
  {
     return this.http.get(apiUrl); 
  }
}
