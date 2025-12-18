import { Component } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {

  customer:Customer[]=[];

  constructor(private customerService:CustomerService, private router:Router){}

  ngOnInit():void{

    this.getCustomer();
  }

  getCustomer(){

    this.customerService.getCustomerList().subscribe(data=>{
      this.customer=data;
    })
  }

  delete(id:number){

    this.customerService.deleteCustomer(id).subscribe(data=>{
      console.log(data);
      this.getCustomer();
    })
  }

  update(id:number){

    this.router.navigate(['update-customer', id]);
  }

  view(id:number){

    this.router.navigate(['view-customer', id]);
  }

}
