import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ContractorsComponent } from './contractors/contractors.component';
import { CustomersComponent } from './customers/customers.component';



@NgModule({
  declarations: [HomeComponent, ContractorsComponent, CustomersComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
