import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { CustomersComponent } from './customers/customers.component';
import { ContractorsComponent } from './contractors/contractors.component';




@NgModule({
  declarations: [HomeComponent, CustomersComponent, ContractorsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
