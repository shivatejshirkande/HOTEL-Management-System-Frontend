import { Component } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent {

  customer:Customer=new Customer();

  constructor(private customerService:CustomerService, private router:Router) {}

  saveCustomer(){

    this.customerService.createCustomer(this.customer).subscribe(data=>{
      console.log(data);
      this.goToCustomer();

    });
  }

  onSubmit(form: NgForm){
    if (!form.valid) {
      alert("Please fill all the fields.");
      return;
    }

    this.saveCustomer();
  }

  goToCustomer(){

    this.router.navigate(['customer']);
  }

}
