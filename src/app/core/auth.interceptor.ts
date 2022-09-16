import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CookieService } from 'ngx-cookie-service';
import { Storage } from "@ionic/storage";


@Injectable()

export class AuthInterceptor implements HttpInterceptor{
    constructor(
        private cookieService:CookieService,
        private storage:Storage,
    ){

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token= this.storage.get("token"); 
        if(token){     
            req =req.clone({
                setHeaders:{
                    "Authorization":"Bearer "+token,
                    "Content-Type":"application/json"
                }
            })
        }
        return next.handle(req); 
    }
}