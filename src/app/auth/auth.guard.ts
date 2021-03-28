import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Auth } from 'aws-amplify';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): true | UrlTree {
    const url: string = state.url;
    return this.checkLogin(url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): true | UrlTree {
    return this.canActivate(route, state);
  }
  
  canLoad(route: Route): true | UrlTree {
    const url = `/$(route.path)`;
    return this.checkLogin(url);
  }
  
  checkLogin(url: string): true | UrlTree {
    if (Auth.currentAuthenticatedUser !== null){ 
      redirect: '/home';
    }
    return this.router.parseUrl('/auth');

  }
}
