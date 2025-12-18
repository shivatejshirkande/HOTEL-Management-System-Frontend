import { Component } from '@angular/core';
import { Order } from '../order';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../order.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-order',
  templateUrl: './update-order.component.html',
  styleUrls: ['./update-order.component.css']
})
export class UpdateOrderComponent {

  id: number = 0;
  order: Order = new Order();

  // 🔽 Dropdown options (same as Create Order Component)
  // paymentStatusList: string[] = ["paid", "unpaid", "pending"];
  // orderTypeList: string[] = ["room service", "dine-in", "online delivery"];

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.orderService.getOrderById(this.id).subscribe(data => {
      this.order = data;   // existing order automatically fills dropdown
    });
  }

  onSubmit(form: NgForm): void {
    if (!form.valid) {
      alert("Please fill all the fields.");
      return;
    }

    this.orderService.updateOrder(this.id, this.order).subscribe(data => {
      console.log(data);
      this.goToOrder();
    });
  }

  goToOrder() {
    this.router.navigate(['orderList']);
  }
}


// import { Component } from '@angular/core';
// import { Order } from '../order';
// import { ActivatedRoute, Router } from '@angular/router';
// import { OrderService } from '../order.service';
// import { NgForm } from '@angular/forms';

// @Component({
//   selector: 'app-update-order',
//   templateUrl: './update-order.component.html',
//   styleUrls: ['./update-order.component.css']
// })
// export class UpdateOrderComponent {

//   id:number=0;
//   order:Order=new Order();

//   constructor(private route:ActivatedRoute, private orderService: OrderService, private router:Router){}

//   ngOnInit():void{

//     this.id=this.route.snapshot.params['id'];
//     this.orderService.getOrderById(this.id).subscribe(data=>{

//       this.order=data;
//     })
//   }

//   onSubmit(form: NgForm): void {
//     if (!form.valid) {
//       alert("Please fill all the fields.");
//       return;
//     }

//     this.orderService.updateOrder(this.id,this.order).subscribe(data=>{

//       console.log(data);
//       this.goToOrder();
//     })
//   }

//   goToOrder(){

//     this.router.navigate(['orderList']);
//   }


// }
