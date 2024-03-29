import { Component, OnInit, ViewChild } from '@angular/core';

import { UserService } from '../../service/user.service';

import { Persona, ResponseStudent } from 'src/app/model/user.model';
import { IonModal, IonList, NavController } from '@ionic/angular';
import { CreateEstudianteComponent } from './create-estudiante/create-estudiante.component';
import { UiServiceService } from 'src/app/service/ui-service.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.page.html',
  styleUrls: ['./estudiante.page.scss'],
})
export class EstudiantePage implements OnInit {

  @ViewChild(CreateEstudianteComponent) createStudentComponent:CreateEstudianteComponent;
  @ViewChild(IonList) ionList:IonList;
  @ViewChild(IonModal) modal: IonModal;

  test: any;
  rol:string=null;
 
  students:ResponseStudent;
  persona : Persona;
  BuscarForm = new FormControl('',[]);

  constructor(

    private uiService:UiServiceService,
    private userService:UserService,
    public navCtrl: NavController,

  ) { 
    this.students =  new ResponseStudent;
  }

  ngOnInit() {
    this.list(this.BuscarForm.value);
    this.BuscarForm.valueChanges.subscribe((res:any)=>
    {
      this.list(this.BuscarForm.value);
    });
    this.rol=this.userService.rol();
    console.log(this.rol);
   
  }
 

  list(search: any){

    this.userService.getStudent({'name':search}).subscribe(data =>{  
      this.students = data;
      console.log(this.students);
      
    },error=>{
      console.log('Error',error.error);
      
    })

  }

  share(user:any){

    let prueba = {
      id:'5'
    }
    // this.navCtrl.push(CreateEstudianteComponent,{probando:prueba});
    // this.navCtrl.setDirection('app-create-estudiante',{probando:prueba});

    // console.log('share ',user);
  }
  eliminar(user:any){
    console.log('share ',user);
  }


  cancel() {
    this.modal.dismiss(null, 'cancel');
  }



  async confirm() {
    var test2 = this.createStudentComponent.getTest();
    console.log(test2);
    const valido = await this.userService.registroStudent(test2);
    console.log(valido);
    
    if(valido){
      this.modal.dismiss(this.list(this.BuscarForm.value));
    }else{
            this.uiService.alertaInformativa('gmail ya existe o dato gmail no son correcto');
    }
  }

  async onWillDismiss(event:any) {
    // console.log(this.createUsuarioComponent.getTest());
    // console.log(event);
  }

}
