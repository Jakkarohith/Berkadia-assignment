import { Injectable } from '@angular/core';
import { CanActivate ,Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService  implements CanActivate{

  constructor(private router:Router) { }
  canActivate():boolean
    {
     console.log(localStorage.getItem("Login"));
      let value=localStorage.getItem("Login");
      if(value=="true")
      {
       return true;
      }
      else
      {
       alert("Please login");
       return false;
      }
    }
}
