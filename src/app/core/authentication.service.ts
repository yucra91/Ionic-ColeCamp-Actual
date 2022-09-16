import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UiServiceService } from '../service/ui-service.service';
import { Storage } from '@ionic/storage';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


const baseUrl = environment.baseUrl

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  token:string=null;

  constructor(
              private http :HttpClient,
              private storage : Storage,
              private uiService:UiServiceService

  ) { }

  iniciooSeccion(loginForm: any){
    return this.http.post<any>(`${baseUrl}/login`,loginForm, httpOptions);
  }

  login(email:string, password:string){
    const data ={email,password}
 
    return new Promise(resolve =>{
      this.http.post(`${baseUrl}/login`,data)
      .subscribe(resp =>{
        console.log(resp);
   
        if(resp['res']){
       this.storage.create();
          this.guardarToken(resp['token']);
          resolve(true);
        }else{
         this.token=null;
         this.storage.clear();
         resolve(false);
        }
      },
 
      error=>
      {
       this.storage.create();
        this.uiService.alertaInformativa('contraseña no son correcto');
            console.log(error);
           this.token=null;
           this.storage.clear();
           resolve(false);
         }
      );
    });
 
    
   }

   async guardarToken(token:string){
    this.token=token;
   //  this.storage.create();
    await this.storage.set('token',token);
 }

validarToken(){
  return new Promise(resolve =>{
    const header = new HttpHeaders({
      'Token':this.token
    });

    this.http.post(`${baseUrl}/user/`,{ header })
    .subscribe(data =>{

    })
  })

}

}
