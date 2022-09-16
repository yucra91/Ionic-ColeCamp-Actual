import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder,  } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { User } from '../model/user.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  formRegister:FormGroup;
  isLoading = false;

  users:User[];

  constructor(
    private fb: FormBuilder,
    private alertController:AlertController,
    private user:UserService,
  ) {
    this.users=[];
   }

  ngOnInit() {
    this.form();
    this.lit();
  }

  lit(){
    // this.user.getUser().subscribe(data=>{
      
    //   console.log(data);
      
    // })
  }

  form(){
    this.formRegister=this.fb.group({
      name:[''],
      username:[''],
      password:[''],
      confirmPassword:['']
     
    })
  }

   guardar(form: User){
     console.log(form);
     
    // this.user.create(form).subscribe(data=>{
    //   console.log("exito");
    //   this.lit();
    // });
    

  }

}
