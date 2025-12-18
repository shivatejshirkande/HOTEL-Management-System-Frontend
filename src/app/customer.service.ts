import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient:HttpClient) { }

  // baseUrl = "http://43.204.101.113:8080/sms/stud";

  //baseUrl = "http://localhost:8080/emp";

  // baseUrl = "http://13.51.56.218:8080/ems/emp";

  baseUrl = "http://localhost:8080/ct";

  getCustomerList():Observable<Customer[]>{

    return this.httpClient.get<Customer[]>(`${this.baseUrl}/getall`);
  }

  createCustomer(customer:Customer):Observable<Customer>{

    return this.httpClient.post<Customer>(`${this.baseUrl}/add`, customer);
  }

  deleteCustomer(id:number):Observable<object>{

    return this.httpClient.delete(`${this.baseUrl}/delete/${id}`);

  }

  updateCustomer(id:number, customer:Customer):Observable<object>{

    return this.httpClient.put<Customer>(`${this.baseUrl}/update/${id}`, customer);
  }

  getCustomerById(id:number):Observable<Customer>{

    return this.httpClient.get<Customer>(`${this.baseUrl}/get/${id}`);
  }
  
}
