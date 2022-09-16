import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
// import { stringify } from 'querystring';
import { Observable } from 'rxjs';
const url =environment.baseUrl;
@Injectable({
  providedIn: 'root'
})
export class HttpService {


  constructor(
    private http:HttpClient,
  ) { }



  postCrear(dato: any){
    const header = new HttpHeaders();
    const options = {header:header, withCredentials:false};
    
    return this.http.post(`${URL}/admins`, JSON.stringify(dato),options);
  }

  // getadmin(token:string) :Observable<any>{
  //   const headers = new Headers();
  //   headers.append('Content tyepe','application/x-www-form-urlencoded')
  //   headers.append('Accept', 'application/json' );
  //   headers.append('Authorization', 'Bearer ' + token); //<-- added space after 'Bearer'
  //   const options    = new RequestOptions({ headers: headers });
  //   return this.http.post(`${url}/authenticacion/user`,options);
 
  // }

}
