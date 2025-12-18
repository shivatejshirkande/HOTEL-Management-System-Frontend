import { Component } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css']
})
export class ViewCustomerComponent {

  id:number=0;
  customer:Customer=new Customer();

  constructor(private customerService:CustomerService, private route:ActivatedRoute){}

  ngOnInit():void{

    this.id=this.route.snapshot.params['id'];
    this.customerService.getCustomerById(this.id).subscribe(data=>{

      this.customer=data;
    })
  }

}
