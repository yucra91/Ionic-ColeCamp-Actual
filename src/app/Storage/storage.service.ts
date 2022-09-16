import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { escape, unescape } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  token:string=null;

  constructor(
    private storage : Storage
  ) { }

  async guardarToken(token:string){
    this.token=token;
    await this.storage.set('token',token);
  }

  async store(token:string, value?:any){
    const encryptedValue = btoa(escape(JSON.stringify(value)));
    return await this.storage.set(token,encryptedValue);
 }

 async get(token: string){
   return new Promise(resolve => {
     this.storage.get(token).then((value)=>{
       if(value==null){
         resolve(false);
       }else{
         resolve(JSON.parse(unescape(atob(value))));
       }
     });
   });
 }

 async removeItem(token:string){
 await this.storage.remove(token); 
 }

 async clear(){
   await this.storage.clear();
 }

}
