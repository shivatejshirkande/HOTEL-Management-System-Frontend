import { Component } from '@angular/core';
import { Order } from '../order';
import { OrderService } from '../order.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent {

  id:number=0;
  order:Order=new Order();

  constructor(private orderService:OrderService, private route:ActivatedRoute){}

  ngOnInit():void{

    this.id=this.route.snapshot.params['id'];
    this.orderService.getOrderById(this.id).subscribe(data=>{

      this.order=data;
    })
  }

}
