import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatalistPageRoutingModule } from './datalist-routing.module';

import { DatalistPage } from './datalist.page';
import { ComponentsModule } from '../../components/components.module';
import { CreateColegioComponent } from './create-colegio/create-colegio.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    IonicModule,
    DatalistPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [DatalistPage, CreateColegioComponent]
})
export class DatalistPageModule {}
