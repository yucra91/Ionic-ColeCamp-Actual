import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-create-colegio',
  templateUrl: './create-colegio.component.html',
  styleUrls: ['./create-colegio.component.scss'],
})
export class CreateColegioComponent implements OnInit {

  @Output() enviarColegio : EventEmitter<any> = new EventEmitter();
  formColegio:FormGroup;

  constructor(
    private fb: FormBuilder,
    private colegioService:UserService,

  ) { }

  ngOnInit() {
    this.formCole();
  }

  formCole(){
    this.formColegio = this.fb.group({
      nombre_colegio: ['' ],
      direccion: [''],
      telefono: [''],
      celular: [''],
      imagen: [''],
    });
   }

   formulario(){
    console.log(this.formColegio.value);
    this.enviarColegio.emit(this.formColegio.value);
    return this.formColegio.value;
  }

}
