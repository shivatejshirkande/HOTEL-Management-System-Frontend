import { Component } from '@angular/core';
import { Menu } from '../menu';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuService } from '../menu.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-menu',
  templateUrl: './update-menu.component.html',
  styleUrls: ['./update-menu.component.css']
})
export class UpdateMenuComponent {

  id:number=0;
  menu:Menu=new Menu();

  constructor(private route:ActivatedRoute, private menuService: MenuService, private router:Router){}

  ngOnInit():void{

    this.id=this.route.snapshot.params['id'];
    this.menuService.getMenuById(this.id).subscribe(data=>{

      this.menu=data;
    })
  }

  onSubmit(form: NgForm): void {
    if (!form.valid) {
      alert("Please fill all the fields.");
      return;
    }

    this.menuService.updateMenu(this.id,this.menu).subscribe(data=>{

      console.log(data);
      this.goToMenu();
    })
  }

  goToMenu(){

    this.router.navigate(['menuList']);
  }

}
