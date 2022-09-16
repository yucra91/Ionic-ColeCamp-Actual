import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UserService } from '../../../service/user.service';


@Component({
  selector: 'app-create-usuario',
  templateUrl: './create-usuario.component.html',
  styleUrls: ['./create-usuario.component.scss'],
})
export class CreateUsuarioComponent implements OnInit {
@Output() enviarUsuario : EventEmitter<any> = new EventEmitter();
formCreateUser:FormGroup;

  constructor(
    private fb: FormBuilder,
    private adminService:UserService,
  ) { }

  ngOnInit() {
    this.formAdmin();
  }
  getTest(){
    console.log(this.formCreateUser.value);
    this.enviarUsuario.emit(this.formCreateUser.value);
    return this.formCreateUser.value;
  }

  formAdmin(){
    this.formCreateUser = this.fb.group({
      first_name: ['', [Validators.required]],
      last_name: ['', Validators.required],
      ci: [''],
      cellphone: [''],
      email: ['', [Validators.required]],
      password: ['', Validators.required],
      password_confirmation: ['', Validators.required],

    });
   }

  

}
