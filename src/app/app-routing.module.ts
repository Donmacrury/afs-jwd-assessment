import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: 'home', canActivate: [AuthGuard], loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  { path: 'auth', component: AuthComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }