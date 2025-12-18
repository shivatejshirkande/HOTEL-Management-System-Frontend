import { Component } from '@angular/core';
import { Menu } from '../menu';
import { MenuService } from '../menu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  menu:Menu[]=[];

  constructor(private menuService:MenuService, private router:Router){}

  ngOnInit():void{

    this.getMenu();
  }

  getMenu(){

    this.menuService.getMenuList().subscribe(data=>{
      this.menu=data;
    })
  }

  delete(id:number){

    this.menuService.deleteMenu(id).subscribe(data=>{
      console.log(data);
      this.getMenu();
    })
  }

  update(id:number){

    this.router.navigate(['update-menu', id]);
  }

  view(id:number){

    this.router.navigate(['view-menu', id]);
  }

}
