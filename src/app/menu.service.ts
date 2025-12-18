import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Menu } from './menu';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private httpClient:HttpClient) { }

  // baseUrl = "http://43.204.101.113:8080/sms/stud";

  //baseUrl = "http://localhost:8080/emp";

  // baseUrl = "http://13.51.56.218:8080/ems/emp";

  baseUrl = "http://localhost:8080/menu";

  getMenuList():Observable<Menu[]>{

    return this.httpClient.get<Menu[]>(`${this.baseUrl}/getall`);
  }

  createMenu(menu:Menu):Observable<Menu>{

    return this.httpClient.post<Menu>(`${this.baseUrl}/add`, menu);
  }

  deleteMenu(id:number):Observable<object>{

    return this.httpClient.delete(`${this.baseUrl}/delete/${id}`);

  }

  updateMenu(id:number, menu:Menu):Observable<object>{

    return this.httpClient.put<Menu>(`${this.baseUrl}/update/${id}`, menu);
  }

  getMenuById(id:number):Observable<Menu>{

    return this.httpClient.get<Menu>(`${this.baseUrl}/get/${id}`);
  }

}
