import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { User, Admin, ResponseAdmin, Student } from '../model/user.model';
import { Componente } from '../interfaces/interfaces';
import { Storage } from "@ionic/storage";
import { NavController } from '@ionic/angular';
import 'rxjs/Rx';
import { map } from 'rxjs/operators';
import { RouteInfo } from '../interfaces/sidebar';
import { Observable } from 'rxjs';
const URL =environment.baseUrl;



@Injectable({
  providedIn: 'root'
})
export class UserService {
  token : string=null;
  roles:string=null;
  user:User[];
  prueba: RouteInfo[];

  usuario:Admin[];

  constructor(private httpClient: HttpClient,
    private storage:Storage,
    private navCtrl:NavController,
    ) {   
  }
  getMenuOpts(){
    return this.httpClient.get<Componente[]>('assets/data/menu-opts.json');
  }

  
  getMenu(){
    return this.httpClient.get<RouteInfo[]>('assets/data/menu-opts.json')
    .subscribe(data =>{
      this.prueba=data;
      
      
    });
  }

  getData(){
    return this.prueba;
  }

  // iniciarSesion(user: User){
  //   return this.httpClient.post(`${URL}/login`,user);
  // }

  getAdmin() {
    return this.httpClient.get(`${URL}/admins`).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  EliminarAdmin(id:any) {
    console.log(id);
    
    return this.httpClient.delete(`${URL}/admins/`+id).subscribe();
  }
  
  EditarAdmin(id: string, payload: any): Observable<any> {
    return this.httpClient.put(`${URL}/admins/${id}`, payload).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  getStudent() {
    return this.httpClient.get(`${URL}/student`).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  EliminarStudent(id:any) {
    console.log(id);
    
    return this.httpClient.delete(`${URL}/student/`+id).subscribe();
  }

   login(email:string,password:string){
    const data = {email,password};
 
    return new Promise(resolve => {

      this.httpClient.post(`${URL}/authenticacion/login`,data)
      .subscribe(async resp => {
        this.getMenu();
      
        const user=resp['user']
        this.roles=user.roles[0].name;
        console.log(this.roles);
         
        if(resp['success']){
         await this.guardarToken(resp['token']);
          resolve(true);
        }else {
          this.token = null;
          this.storage.clear();
          resolve(false)
        }
        console.log(resp);
        
      },error=>{
        this.token = null;
        this.storage.clear();
        resolve(false)
        console.log(error.error);
      })
    })
    // return this.httpClient.post(`${URL}/authenticacion/login`,{ email,password});
  }

  logout(){
    this.token=null;
    this.usuario=null;
    this.storage.clear();
    this.navCtrl.navigateRoot('/login',{animated:true});

  }


  async registro(admin: Admin){
    return new Promise(resolve => {
      this.httpClient.post(`${URL}/admins`,admin)
      .subscribe(async resp => {
        console.log(resp);
        
        if(resp['ok']){
          await this.guardarToken(resp['token']);
          resolve(true);

        }else {
          this.token = null;
          this.storage.clear();
          resolve(false)
        }

      },error=>{
        this.token = null;
        this.storage.clear();
        resolve(false)
        console.log(error.error);
      })
    });

  }

  async registroStudent(student: Student){
    return new Promise(resolve => {
      this.httpClient.post(`${URL}/student`,student)
      .subscribe(async resp => {
        console.log(resp);
        
        if(resp['ok']){
          await this.guardarToken(resp['access_token']);
          resolve(true);

        }else {
          this.token = null;
          this.storage.clear();
          resolve(false)
        }

      },error=>{
        this.token = null;
        this.storage.clear();
        resolve(false)
        console.log(error.error);
      })
    });

  }

  async guardarToken(token:string){
    this.token =token;
    await this.storage.set('token',token);

    await this.validaToken();
  }

  rol(){
    return this.roles;
  }




async validaToken():Promise<boolean>{

  await this.cargarToken();

  if(!this.token){
   
    
    this.navCtrl.navigateRoot('/login');
    return Promise.resolve(false);
  }

  return new Promise (resolve =>{
    
    const headers = new HttpHeaders({
      'Accept':  'application/json',
      'Authorization':'Bearer'+this.token
    });

    this.httpClient.get(`${URL}/admins/`,{headers}).subscribe(resp =>{
      console.log(resp['ok']);
      if(resp['ok']){

        this.usuario = resp['Admin'];
        resolve(true);
      }
      else{
        resolve(false);

      }
    })
  })
}


async cargarToken(){
  this.token = await this.storage.get('token') || null;
}
  // createAdmin(admin: Admin){
  //   const headers = { 'content-type': 'application/json'}  
  //   const body=JSON.stringify(admin);
  //   console.log(body)
  //   return this.httpClient.post(`${URL}/admins`, body,{'headers':headers, observe: 'response'})
  // }

  // eliminar(id:any){
  //   console.log(id);
  //   return this.httpClient.delete(`${URL}/users/`+id);
  // }
  // getLogin():Observable<any> {
  //   return this.httpClient.get(`${URL}/login`);
  // }

  
  // admin():Observable<any>{
  //   return this.httpClient.post(`${URL}/authenticacion/user`,{});

  // }

  // create(user: User){
  //   return this.httpClient.post(`${URL}/registro`,user);
  // }


}
