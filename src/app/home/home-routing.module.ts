import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../auth/auth.guard';
import { ContractorsComponent } from './contractors/contractors.component';
import { CustomersComponent } from './customers/customers.component';
import { HomeComponent } from './home.component';

const homeRoutes: Routes = [
  { path: '', component: HomeComponent, canLoad: [AuthGuard],
    children: [
      { path: 'customers', component: CustomersComponent, canActivate: [AuthGuard] },
      { path: 'contractors', component: ContractorsComponent, canActivate: [AuthGuard] },
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
