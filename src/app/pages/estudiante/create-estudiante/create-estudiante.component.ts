import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NavParams } from '@ionic/angular';
import { ResponseColegio } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-create-estudiante',
  templateUrl: './create-estudiante.component.html',
  styleUrls: ['./create-estudiante.component.scss'],
})
export class CreateEstudianteComponent implements OnInit {
  @Output() enviarStudent : EventEmitter<any> = new EventEmitter();

  prueba:any;
  colegios:ResponseColegio;

  formCreateStudent:FormGroup;
  constructor(
    private fb: FormBuilder,
    private userService:UserService,
  ) { 

    this.colegios = new ResponseColegio;
  }

  ngOnInit() {
    this.formStudent();
    this.list();
  }
  list(){
    this.userService.getColegio().subscribe(data =>{
      // this.admins = data;
      console.log('data: ',data);

      this.colegios=data;

      console.log('colegio: ',this.colegios);
      
    },error=>{
      console.log('Error',error.error);
      
    })

  }

  getTest(){
    // console.log(this.formCreateStudent.value);
    this.enviarStudent.emit(this.formCreateStudent.value);
    return this.formCreateStudent.value;
  }

  formStudent(){
    this.formCreateStudent = this.fb.group({
      first_name: ['', [Validators.required]],
      last_name: ['', Validators.required],
      ci: [''],
      cellphone: [''],
      email: ['', [Validators.required]],
      password: ['', Validators.required],
      password_confirmation: ['', Validators.required],
      colegio_id: ['',[Validators.required]],

    });
   }

}
