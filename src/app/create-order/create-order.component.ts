import { Component } from '@angular/core';
import { Order } from '../order';
import { OrderService } from '../order.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent {

  order:Order=new Order();

  // paymentStatusList: string[] = ["paid", "unpaid", "pending"];
  // orderTypeList: string[] = ["room service", "dine-in", "online delivery"];

  constructor(private orderService:OrderService, private router:Router) {}

  saveOrder(){

    this.orderService.createOrder(this.order).subscribe(data=>{
      console.log(data);
      this.goToOrder();

    });
  }

  onSubmit(form: NgForm){
    if (!form.valid) {
      alert("Please fill all the fields.");
      return;
    }

    this.saveOrder();
  }

  goToOrder(){

    this.router.navigate(['orderList']);
  }


}
