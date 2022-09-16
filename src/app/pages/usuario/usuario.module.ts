import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioPageRoutingModule } from './usuario-routing.module';

import { UsuarioPage } from './usuario.page';
import { ComponentsModule } from '../../components/components.module';
import { CreateUsuarioComponent } from './create-usuario/create-usuario.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
 
  ],
  declarations: [UsuarioPage,CreateUsuarioComponent]
})
export class UsuarioPageModule {}
