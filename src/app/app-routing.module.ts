import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractorsComponent } from './home/contractors/contractors.component';
import { CustomersComponent } from './home/customers/customers.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent,
    children: [
      { path: 'home/customers', component: CustomersComponent },
      { path: 'home/contractors', component: ContractorsComponent },
    ]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }