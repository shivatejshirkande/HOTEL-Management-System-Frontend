import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {

  username:string="";
  password:string="";

  inValidLogin=false;

  constructor(private router:Router) {}

  checkLogin(){

    if(this.username=="shivatej"&&this.password=="shivatej@123")
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
