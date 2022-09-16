import { Component, OnInit, ViewChild } from '@angular/core';


import { IonList, IonModal, ModalController, NavController } from '@ionic/angular';
import { UserService } from '../../service/user.service';

import { CreateUsuarioComponent } from './create-usuario/create-usuario.component';
import { Admin, ResponseAdmin, Persona } from '../../model/user.model';
import { UiServiceService } from 'src/app/service/ui-service.service';
interface Componente {
  nombre :string;
  apellido:string
  
}

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {

  @ViewChild(IonList) ionList:IonList;
  @ViewChild(CreateUsuarioComponent) createUsuarioComponent:CreateUsuarioComponent;
  @ViewChild(IonModal) modal: IonModal;

  test: any;

  rol:string=null;

  admins: ResponseAdmin;
  persona : Persona;
  constructor(
    private userService:UserService,
    private uiService:UiServiceService
   
    ) { 
      this.admins =  new ResponseAdmin;
      // this.usuarios=[];
    }

  ngOnInit() {
    this.list();
    this.rol=this.userService.rol();
    console.log(this.rol);
    
  }

  list(){
    this.userService.getAdmin().subscribe(data =>{
      console.log(data);
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
    console.log('share ',user.id);
    
  }
  eliminar(user:any){
    console.log('eliminar ',user.id);
    this.userService.EliminarAdmin(user.id);
    this.list();
    
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  async confirm() {
    var test2 = this.createUsuarioComponent.getTest();
    console.log(test2);
    const valido = await this.userService.registro(test2);
    console.log(valido);
    
    if(valido){
      this.modal.dismiss(this.list());
    }else{
            this.uiService.alertaInformativa('gmail ya existe o dato gmail no son correcto');
    }
  }

  async onWillDismiss(event:any) {
    // console.log(this.createUsuarioComponent.getTest());
    // console.log(event);
  }
}
