import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

@Input() resivir:string;

estado:boolean;

  constructor(
    private fb: FormBuilder,
    private adminService:UserService,
  ) { 
    
  }

  ngOnInit() {

    const item=this.adminService.getItem();
    
    this.estado=this.adminService.getEstado();
    if (this.adminService.getEstado()) {

      this.adminService.getById(this.adminService.getItem()).subscribe(data => {
        console.log(data);
        console.log(data.data[0].users.first_name);
        console.log(data.data[0].id);
        this.formCreateUser.patchValue({
          first_name: data.data[0].personas.first_name,
          last_name: data.data[0].personas.last_name,
          ci: data.data[0].personas.ci,
          cellphone: data.data[0].personas.cellphone,
          email: data.data[0].users.email,
          password: data.data[0].users.password,
        });
      });
    }
    
    

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

      // load(id:string,estado:boolean){
      //   console.log("datos etc ",id,estado);
      //    this.adminService.getById(id).subscribe(data => {
      //     console.log(data);
      //     console.log(data.data[0].personas.first_name);
      //     // console.log(data.Admin[0].personas.first_name);
      //     this.formCreateUser.patchValue({
            
      //       first_name: data.data[0].personas.first_name,
    
      //     });
      //   });
      //   // console.log("desde crear usarioa",carga);
      // }