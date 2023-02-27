import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, NgForm,  } from '@angular/forms';
import { AuthenticationService } from '../core/authentication.service';
import { UserService } from '../service/user.service';
import { Credentials } from '../interfaces/interfaces';
import { TokenStorageService } from '../core/token-storage.service';
import { CookieService } from 'ngx-cookie-service';
import { Storage } from '@ionic/storage';
import { HttpService } from '../service/http.service';
import { User } from '../model/user.model';
import { NavController } from '@ionic/angular';
import { UiServiceService } from '../service/ui-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formLogin:FormGroup;
  isLoading = false;

  credentials: Credentials;

  loginUser ={
    email:'gaby@gmail.com',
    password:'gaby'
  }

users:any;
  constructor( 
    private fb: FormBuilder,
    private userService:UserService,
    private navCtrl:NavController,
    private uiService:UiServiceService,
    ) {
      this.formLogin = this.fb.group({
        email: ['', [Validators.required]],
        password: ['', Validators.required],
        recuerdame: null
      });
     }

  ngOnInit() {
    // this.userService.probando();
    // this.userService.get();
  }
  

  async login(form:any){
    this.isLoading = true;
    const valido = await this.userService
      .login(form.email, form.password);

      if(valido){
        this.navCtrl.navigateRoot('inicio',{animated:true})
      }else {
        this.uiService.alertaInformativa('usuario y contraseña no son correcta');
      }
 
  }



}
