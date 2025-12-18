import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from './order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private httpClient:HttpClient) { }

  // baseUrl = "http://43.204.101.113:8080/sms/stud";

  //baseUrl = "http://localhost:8080/emp";

  // baseUrl = "http://13.51.56.218:8080/ems/emp";

  baseUrl = "http://localhost:8080/order";

  getOrderList():Observable<Order[]>{

    return this.httpClient.get<Order[]>(`${this.baseUrl}/getall`);
  }

  createOrder(order:Order):Observable<Order>{

    return this.httpClient.post<Order>(`${this.baseUrl}/add`, order);
  }

  deleteOrder(id:number):Observable<object>{

    return this.httpClient.delete(`${this.baseUrl}/delete/${id}`);

  }

  updateOrder(id:number, order:Order):Observable<object>{

    return this.httpClient.put<Order>(`${this.baseUrl}/update/${id}`, order);
  }

  getOrderById(id:number):Observable<Order>{

    return this.httpClient.get<Order>(`${this.baseUrl}/get/${id}`);
  }
}
