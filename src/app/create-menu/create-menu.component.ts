import { Component } from '@angular/core';
import { Menu } from '../menu';
import { MenuService } from '../menu.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-menu',
  templateUrl: './create-menu.component.html',
  styleUrls: ['./create-menu.component.css']
})
export class CreateMenuComponent {

  menu:Menu=new Menu();

  constructor(private menuService:MenuService, private router:Router) {}

  saveMenu(){

    this.menuService.createMenu(this.menu).subscribe(data=>{
      console.log(data);
      this.goToMenu();

    });
  }

  onSubmit(form: NgForm){
    if (!form.valid) {
      alert("Please fill all the fields.");
      return;
    }

    this.saveMenu();
  }

  goToMenu(){

    this.router.navigate(['menuList']);
  }

}
