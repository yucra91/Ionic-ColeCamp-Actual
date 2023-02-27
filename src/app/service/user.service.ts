import { Colegio } from './../model/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { User, Admin, ResponseAdmin, Student } from '../model/user.model';
import { Storage } from "@ionic/storage";
import { NavController } from '@ionic/angular';
import 'rxjs/Rx';
import { map } from 'rxjs/operators';
import { RouteInfo } from '../interfaces/sidebar';
import { Observable } from 'rxjs';
import { ApiClass } from '../class/Api.class';

const URL =environment.baseUrl;
let URLprueba =environment.baseUrl;
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    // Authorization: 'my-auth-token'
  })
};


@Injectable({
  providedIn: 'root'
})
export class UserService extends ApiClass {
  token : string=null;
  roles:string=null;
  user:User[];
  prueba: RouteInfo[];

  usuario:Admin[];
  setId:string;
  setEstado:boolean=false;

  setUsuario:Admin[];

  constructor(protected httpClient: HttpClient,
    private storage:Storage,
    private navCtrl:NavController,
    ) { 
      super(httpClient);
      this.baseUrl = URL+'/categorias';
        this.setEstado;
        
  }  

  setIten(item:string,estado:boolean,formulario:Admin[]){
    this.setId=item;
    this.setEstado=estado;
    this.setUsuario=formulario;
  }

  getItem(){
    return this.setId;
  }
  getEstado(){
    return this.setEstado;
  }
  Estado(estado:boolean){
    this.setEstado=estado;
  }

  getById(id: string): Observable<any> {

    return this.httpClient.get(`${URL}/admins/${id}`).pipe(
      map((body: any) => {
        return body;
      })
    );
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

  getAdmin(filterObject?: any) {
    let queryString = '';
    if (filterObject) {
      const fitlerKeys: any[] = Object.keys(filterObject);
      if (fitlerKeys.length > 0) {
        queryString = '?';
      }
      fitlerKeys.forEach((key: any, index) => {
        if (filterObject[key] !== undefined && filterObject[key] !== null) {
          if (filterObject[key].toString().length) {
            queryString += `${key}=${filterObject[key]}&`;
          }
        }
      });
      if (
        fitlerKeys.length > 0 &&
        queryString[queryString.length - 1] === '&'
      ) {
        queryString = queryString.slice(0, -1);
      }
    }

    return this.httpClient.get(`${URL}/admins${queryString}`).pipe(
      map((body: any) => {
        return body;
      })
    );
  }


  getColegio(filterObject?: any) {
    let queryString = '';
    if (filterObject) {
      const fitlerKeys: any[] = Object.keys(filterObject);
      if (fitlerKeys.length > 0) {
        queryString = '?';
      }
      fitlerKeys.forEach((key: any, index) => {
        if (filterObject[key] !== undefined && filterObject[key] !== null) {
          if (filterObject[key].toString().length) {
            queryString += `${key}=${filterObject[key]}&`;
          }
        }
      });
      if (
        fitlerKeys.length > 0 &&
        queryString[queryString.length - 1] === '&'
      ) {
        queryString = queryString.slice(0, -1);
      }
    }

    return this.httpClient.get(`${URL}/colegios${queryString}`).pipe(
      map((body: any) => {
        return body;
      })
    );
  }

  EliminarAdmin(id:any) {
    console.log(id);
    
    return this.httpClient.delete(`${URL}/admins/`+id).subscribe();
  }

  probando(){

    URLprueba+="/admins";
    console.log('url ',URLprueba);
    

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

  async createColegio(colegio: Colegio){
    console.log('servicio colegio: ',colegio);
    
    return new Promise(resolve => {
      this.httpClient.post(`${URL}/colegios`,colegio)
      .subscribe( resp => {
        console.log(resp);
        
        // if(resp['ok']){
        //   await this.guardarToken(resp['token']);
        //   resolve(true);

        // }else {
        //   this.token = null;
        //   this.storage.clear();
        //   resolve(false)
        // }

      },error=>{
        // this.token = null;
        // this.storage.clear();
        resolve(false)
        console.log(error.error);
      })
    });
  }






   EditarAdmin(id: number, payload: any): Observable<any> {
    return this.httpClient.put(`${URL}/admins-edit/${id}`, payload, httpOptions).pipe(
      map((body: any) => {
        console.log(body);
        return body;
      })
    );
  }

  getStudent(filterObject?: any) {

    let queryString = '';
    if (filterObject) {
      const fitlerKeys: any[] = Object.keys(filterObject);
      if (fitlerKeys.length > 0) {
        queryString = '?';
      }
      fitlerKeys.forEach((key: any, index) => {
        if (filterObject[key] !== undefined && filterObject[key] !== null) {
          if (filterObject[key].toString().length) {
            queryString += `${key}=${filterObject[key]}&`;
          }
        }
      });
      if (
        fitlerKeys.length > 0 &&
        queryString[queryString.length - 1] === '&'
      ) {
        queryString = queryString.slice(0, -1);
      }
    }

    return this.httpClient.get(`${URL}/student${queryString}`).pipe(
      map((body: any) => {
        return body;
      })
    );

    // return this.httpClient.get(`${URL}/student`).pipe(
    //   map((body: any) => {
    //     return body;
    //   })
    // );
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
        console.log('prueva');

        console.log(resp);
        
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



  async registroStudent(student: Student){
    return new Promise(resolve => {
      this.httpClient.post(`${URL}/student`,student)
      .subscribe(async resp => {
         console.log("registroEstudiante",resp);
        
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
