import { Component } from '@angular/core';
import { Menu } from '../menu';
import { MenuService } from '../menu.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-menu',
  templateUrl: './view-menu.component.html',
  styleUrls: ['./view-menu.component.css']
})
export class ViewMenuComponent {

  id:number=0;
  menu:Menu=new Menu();

  constructor(private menuService:MenuService, private route:ActivatedRoute){}

  ngOnInit():void{

    this.id=this.route.snapshot.params['id'];
    this.menuService.getMenuById(this.id).subscribe(data=>{

      this.menu=data;
    })
  }

}
