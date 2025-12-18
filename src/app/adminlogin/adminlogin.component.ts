import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {

  username:string="";
  password:string="";

  inValidLogin=false;

  constructor(private router:Router) {}

  checkLogin(){

    if(this.username=="prathamesh"&&this.password=="prathamesh@123")
    {
      sessionStorage.setItem('username', this.username);

      this.router.navigate(['customer']);
      return true;
    }
    else
    {
      alert("Wrong Username or Password");
      this.router.navigate(['']);
      return false;
    }
  }


}
