import { CanActivateFn, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { AuthService } from './service/auth.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

  export class AuthGuard implements CanActivate {

    constructor(private authService:AuthService, private router: Router){}
  
    canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): boolean | UrlTree {
      let isAuthenticated = this.authService.isAuthenticated();
      if(isAuthenticated){
        return true;
      } else {
        this.router.navigateByUrl('/login');
        return false;
      }
    }
  }
  