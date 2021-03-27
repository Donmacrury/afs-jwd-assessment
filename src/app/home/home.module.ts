import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import { CustomersComponent } from './customers/customers.component';
import { ContractorsComponent } from './contractors/contractors.component';

import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [HomeComponent, CustomersComponent, ContractorsComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class HomeModule { }
