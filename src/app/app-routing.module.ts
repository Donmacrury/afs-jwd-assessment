import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  // { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'home', component: HomeComponent },
  { path: 'home/contractors', loadChildren: () => import('./home/contractors/contractors.module').then(m => m.ContractorsModule) },
  { path: 'home/customers', loadChildren: () => import('./home/customers/customers.module').then(m => m.CustomersModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
