import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-estudiante',
  templateUrl: './create-estudiante.component.html',
  styleUrls: ['./create-estudiante.component.scss'],
})
export class CreateEstudianteComponent implements OnInit {
  @Output() enviarStudent : EventEmitter<any> = new EventEmitter();

  formCreateStudent:FormGroup;
  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.formStudent();
  }

  getTest(){
    console.log(this.formCreateStudent.value);
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

    });
   }

}
