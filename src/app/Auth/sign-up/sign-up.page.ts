import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {
  validationMessages = {
    names: [{type:"required", message:"Please Enter your Full Names"}],
    phone: [{type:"required", message:"Please Enter your Phone No."}],
    email: [
      {type: 'required',message:"Enter your Email Adress"},
      {type:"pattern", meesage:"Please the Email Entered is Incorrect. Try again.."}
    ],
    password: [
      {type: "required", message: "password is required here"},
      {type:"minlength", message: "Passwrd must be at least 6 character"}
    ]
 }

  form : FormGroup;

  constructor(

    private formbuilder:FormBuilder
  ) { }

  ngOnInit() {
    this.FormSignUp();
  }

  FormSignUp(){
    this.form = this.formbuilder.group({
      first_name:[''],
      last_name:[''],
      Cellphone:[''],
      CI:[''],
      imagenes:[''],
      email:['',Validators.required],
      password:['',Validators.required,Validators.minLength(6)],
      
      
      // email: new FormControl('', Validators.compose([
      //   Validators.required,
      //   Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      // ])),
  
     
    })

  }
  registerUser(fr:any){
    console.log('Registrado');
    
  }

}
