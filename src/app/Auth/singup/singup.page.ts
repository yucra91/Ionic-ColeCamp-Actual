import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, Form } from '@angular/forms';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.page.html',
  styleUrls: ['./singup.page.scss'],
})
export class SingupPage implements OnInit {
  showPassword: boolean = false;
  nameIcon: string = "eye";
  mostrarIcono: boolean = false;
  form: FormGroup;
  colegios = [
    {
      id_col:1,
      nombre:"Harry Pitman"
    },
    {
      id_col:2,
      nombre:"Colegio Adventista de Bolivia"
    },
    {
      id_col:3,
      nombre:"Shalom"
    },
    {
      id_col:4,
      nombre:"Maranatha"
    },
    {
      id_col:5,
      nombre:"Los Andes"
    },
  ]
  constructor(private formBuilder: FormBuilder) { 
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      colegio: ['', Validators.required],
      // acuerdo: [false, Validators.required],
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
  login(form: Form){
    console.log(form);
    
  }
}
