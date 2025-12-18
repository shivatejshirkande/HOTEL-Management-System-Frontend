import { Component } from '@angular/core';
import { Order } from '../order';
import { OrderService } from '../order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  order:Order[]=[];

  constructor(private orderService:OrderService, private router:Router){}

  ngOnInit():void{

    this.getOrder();
  }

  getOrder(){

    this.orderService.getOrderList().subscribe(data=>{
      this.order=data;
    })
  }

  delete(id:number){

    this.orderService.deleteOrder(id).subscribe(data=>{
      console.log(data);
      this.getOrder();
    })
  }

  update(id:number){

    this.router.navigate(['update-order', id]);
  }

  view(id:number){

    this.router.navigate(['view-order', id]);
  }


}
