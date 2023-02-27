import { ResponseColegio } from './../../model/user.model';

import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList, IonModal } from '@ionic/angular';

import { Observable } from 'rxjs';
import { UserService } from 'src/app/service/user.service';
import { UiServiceService } from '../../service/ui-service.service';
import { Colegio } from '../../model/user.model';
import { FormControl } from '@angular/forms';
import { CreateColegioComponent } from './create-colegio/create-colegio.component';

@Component({
  selector: 'app-datalist',
  templateUrl: './datalist.page.html',
  styleUrls: ['./datalist.page.scss'],
})
export class DatalistPage implements OnInit {
  @ViewChild(CreateColegioComponent) createColegioComponent: CreateColegioComponent;
  @ViewChild(IonModal) modal: IonModal;
  @ViewChild(IonList) ionList:IonList;

  colegios:ResponseColegio;
  BuscarForm = new FormControl('',[]);

  usuarios:Observable<any>;
  constructor( 
    private userService:UserService,
    private uiService:UiServiceService
    ) {
      this.colegios = new ResponseColegio;
     }

  ngOnInit() {
    this.list(this.BuscarForm.value);
    this.BuscarForm.valueChanges.subscribe((res:any)=>
    {
      this.list(this.BuscarForm.value);
    });
    // this.rol=this.userService.rol();
    // console.log(this.rol);
  }

  list(search: any){
    this.userService.getColegio({'name':search}).subscribe(data =>{
      // this.admins = data;
      console.log('data: ',data);

      this.colegios=data;
      // console.log(this.colegios);
      
    },error=>{
      console.log('Error',error.error);
      
    })

  }

  // favorite(user:any){
  //   console.log('favorito ',user);
  //   this.ionList.closeSlidingItems();
  // }

  Edit(user:any){
    console.log('share ',user);
    
  }
  eliminar(user:any){
    console.log('share ',user);
    
  }


  cancel() {
    // this.modal.dismiss(null, 'cancel');
    // this.userService.Estado(false);
    // this.estado=false
  }

  async confirm() {
    // if(this.estado){
    //   console.log('editar ',this.id);
    //  var test2 = this.createUsuarioComponent.getTest();
    //   this.userService.EditarAdmin(this.id,test2).subscribe(
    //     data=>{
    //       this.list(this.BuscarForm.value);

    //     },error=>{
    //       this.estado=false;
        
    //       console.log(error.error);
    //     }
    //   );
    // }

    // else{
      console.log('creado');
     var test2 = this.createColegioComponent.formulario();
      

      const valido = await this.userService.createColegio(test2);
      console.log(valido);
      
      if(valido){
        this.modal.dismiss(this.list(this.BuscarForm.value));
      }else{
              this.uiService.alertaInformativa('mo fue registrado ');
      }
    // }
  }

  async onWillDismiss(event:any) {
    // console.log(this.createUsuarioComponent.getTest());
    // console.log(event);
  }

}
