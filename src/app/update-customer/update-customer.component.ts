import { Component } from '@angular/core';
import { Customer } from '../customer';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent {

  id:number=0;
  customer:Customer=new Customer();

  constructor(private route:ActivatedRoute, private customerService: CustomerService, private router:Router){}

  ngOnInit():void{

    this.id=this.route.snapshot.params['id'];
    this.customerService.getCustomerById(this.id).subscribe(data=>{

      this.customer=data;
    })
  }

  onSubmit(form: NgForm): void {
    if (!form.valid) {
      alert("Please fill all the fields.");
      return;
    }

    this.customerService.updateCustomer(this.id,this.customer).subscribe(data=>{

      console.log(data);
      this.goToCustomer();
    })
  }

  goToCustomer(){

    this.router.navigate(['customer']);
  }

}
