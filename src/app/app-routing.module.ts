import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { MenuComponent } from './menu/menu.component';
import { OrderComponent } from './order/order.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { ViewCustomerComponent } from './view-customer/view-customer.component';
import { CreateMenuComponent } from './create-menu/create-menu.component';
import { UpdateMenuComponent } from './update-menu/update-menu.component';
import { ViewMenuComponent } from './view-menu/view-menu.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { UpdateOrderComponent } from './update-order/update-order.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import { HomeComponent } from './home/home.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { UserloginComponent } from './userlogin/userlogin.component';

const routes: Routes = [

  {path:'', component:HomeComponent},
  {path:'customer', component:CustomerComponent},
  {path:'menuList', component:MenuComponent},
  {path:'orderList', component:OrderComponent},
  {path:'create-customer', component:CreateCustomerComponent},
  {path:'update-customer/:id', component:UpdateCustomerComponent},
  {path:'view-customer/:id', component:ViewCustomerComponent},
  {path:'create-menu', component:CreateMenuComponent},
  {path:'update-menu/:id', component:UpdateMenuComponent},
  {path:'view-menu/:id', component:ViewMenuComponent},
  {path:'create-order', component:CreateOrderComponent},
  {path:'update-order/:id', component:UpdateOrderComponent},
  {path:'view-order/:id', component:ViewOrderComponent},
  {path:'adminlogin', component:AdminloginComponent},
  {path:'userlogin', component:UserloginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
