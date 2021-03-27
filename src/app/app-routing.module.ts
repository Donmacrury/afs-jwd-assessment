import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { ContractorsComponent } from './home/contractors/contractors.component';
import { CustomersComponent } from './home/customers/customers.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent,
    children: [
      { path: 'customers', component: CustomersComponent, canActivate: [AuthGuard] },
      { path: 'contractors', component: ContractorsComponent, canActivate: [AuthGuard] },
    ]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }