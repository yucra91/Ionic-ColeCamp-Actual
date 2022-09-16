import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, CanLoad, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../service/user.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioGuard implements CanLoad{
constructor(private usuarioService:UserService){

}

  canLoad(): Observable<boolean>  | Promise<boolean>  | boolean {
    return this.usuarioService.validaToken();
  }
  // canActivate(): Observable<boolean>  | Promise<boolean>  | boolean {
  //   return false;
  // }
  
}
