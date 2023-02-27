import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate, CanLoad {

  constructor(
    private serviceCookie:CookieService,
    private router:Router,
    private storage:Storage
    ){}

canLoad():Observable< boolean > | Promise<boolean> | boolean {


  const token =this.storage.get('token');
  if(token){
    return true;
  }

  this.router.navigate(['/login']);
    return false;
 
}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    const token =this.serviceCookie.get('tokens');
    if(token){
      return true;
    }

    this.router.navigate(['/login']);
      return false;
  }

  
}
