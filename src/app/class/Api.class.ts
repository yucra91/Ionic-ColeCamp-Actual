import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()

export abstract class ApiClass {
  baseUrl: string;

  protected constructor(httpClient: HttpClient)
   {
   }

   get(){
       console.log(this.baseUrl);
       
   }
}