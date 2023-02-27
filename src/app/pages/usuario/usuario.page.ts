import { Component, Input, OnInit, Output, ViewChild, ViewChildren, EventEmitter } from '@angular/core';


import { IonList, IonModal, ModalController, NavController } from '@ionic/angular';
import { UserService } from '../../service/user.service';

import { CreateUsuarioComponent } from './create-usuario/create-usuario.component';
import { Admin, ResponseAdmin, Persona } from '../../model/user.model';
import { UiServiceService } from 'src/app/service/ui-service.service';
import { FormControl } from '@angular/forms';
import { element } from 'protractor';
interface Componente {
  icon :string;
  name:string;
  redirector:string;
  role?: any[] 
}

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {

  @ViewChild(IonList) ionList:IonList;
  // @ViewChildren(CreateUsuarioComponent) createUsuarioComponent: CreateUsuarioComponent;
  @ViewChild(CreateUsuarioComponent) createUsuarioComponent: CreateUsuarioComponent;
  @ViewChild(IonModal) modal: IonModal;
  
  padre='habla eel padre';

  @Output() enviarId: EventEmitter<string>;

  componente: Componente[]=[
    {
      icon: 'american-football-outline',
      name:'Áction Sheet',
      redirector:'/student',
      role:['superAdmin']
    },
    {
      icon: 'american-football-outline',
      name:'Áction Sheet',
      redirector:'/usuario',
      role:["superAdmin"]
    }
  ]

  test: any;
  id:number;
  estado:boolean=false;
  iostren:boolean=false
  rol:string=null;
  BuscarForm = new FormControl('',[]);
  admins: ResponseAdmin;
  persona : Persona;
  constructor(
    private userService:UserService,
    private uiService:UiServiceService
   
    ) { 
      this.admins =  new ResponseAdmin;
      this.estado=false
      // this.usuarios=[];
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
    this.userService.getAdmin({'name':search}).subscribe(data =>{
      this.admins = data;
      console.log(this.admins);
    },error=>{
      console.log('Error',error.error);
      
    })

  }

  

  favorite(user:any){
    console.log('favorito ',user);
    this.ionList.closeSlidingItems();
  }

  share(user:any){
    this.estado=true
    this.userService.setIten(user.id,this.estado,user);
    // this.padre;
    this.id=user.id;
    // console.log('share ',user);
    // console.log(this.createUsuarioComponent);
    // this.createUsuarioComponent.load(user.id,true);    
  }
  eliminar(user:any){
    console.log('eliminar ',user.id);
    this.userService.EliminarAdmin(user.id);
    this.list(this.BuscarForm.value);
    
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
    this.userService.Estado(false);
    this.estado=false
  }

  async confirm() {
    if(this.estado){
      console.log('editar ',this.id);
     var test2 = this.createUsuarioComponent.getTest();
      this.userService.EditarAdmin(this.id,test2).subscribe(
        data=>{
          this.list(this.BuscarForm.value);

        },error=>{
          this.estado=false;
        
          console.log(error.error);
        }
      );
    }

    else{
      console.log('creado');
     var test2 = this.createUsuarioComponent.getTest();
      

      const valido = await this.userService.registro(test2);
      console.log(valido);
      
      if(valido){
        this.modal.dismiss(this.list(this.BuscarForm.value));
      }else{
              this.uiService.alertaInformativa('gmail ya existe o dato gmail no son correcto');
      }
    }
  }

  async onWillDismiss(event:any) {
    // console.log(this.createUsuarioComponent.getTest());
    // console.log(event);
  }
}
