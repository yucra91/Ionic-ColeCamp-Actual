import { ComponentsModule } from './../../components/components.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstudiantePageRoutingModule } from './estudiante-routing.module';

import { EstudiantePage } from './estudiante.page';
import { CreateEstudianteComponent } from './create-estudiante/create-estudiante.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    ReactiveFormsModule,
    EstudiantePageRoutingModule,],
    
  declarations: [EstudiantePage,CreateEstudianteComponent]
})
export class EstudiantePageModule {}
