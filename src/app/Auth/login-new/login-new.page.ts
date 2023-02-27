import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, Form } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { NavController } from '@ionic/angular';
import { UiServiceService } from '../../service/ui-service.service';
import { HttpService } from '../../service/http.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login-new',
  templateUrl: './login-new.page.html',
  styleUrls: ['./login-new.page.scss'],
})
export class LoginNewPage implements OnInit {
  showPassword: boolean = false;
  nameIcon: string = "eye";
  mostrarIcono: boolean = false;
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private navCtrl:NavController,
    private uiService:UiServiceService,
    private http:HttpService,
    private storage:Storage,
  ) {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit() {
    this.form.get('password').valueChanges.subscribe( data=>{
      console.log(data);
      
      if(data.length === 0)
        this.mostrarIcono = false;
      else
        this.mostrarIcono = true;
    }
    )
  }
  togglePassword(){
    this.showPassword = !this.showPassword;
    if(this.nameIcon === 'eye-off-outline')
      this.nameIcon = 'eye-outline';
    else
      this.nameIcon = 'eye-off-outline';
  }
  async login(form:any){

    const valido = await this.userService
      .login(form.email, form.password);

      if(valido){
        this.navCtrl.navigateRoot('inicio',{animated:true})
      }else {
        this.uiService.alertaInformativa('usuario y contraseña no son correcta');
      }
 
  }

}
