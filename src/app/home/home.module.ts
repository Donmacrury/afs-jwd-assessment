import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './home.component';
import { CustomersComponent } from './customers/customers.component';
import { ContractorsComponent } from './contractors/contractors.component';

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { en_US } from 'ng-zorro-antd/i18n';
import { NzLayoutModule } from 'ng-zorro-antd/layout';


@NgModule({
  declarations: [HomeComponent, CustomersComponent, ContractorsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NzButtonModule,
    NzLayoutModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }]
})
export class HomeModule { }
