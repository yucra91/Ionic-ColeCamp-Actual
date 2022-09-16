import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatalistPageRoutingModule } from './datalist-routing.module';

import { DatalistPage } from './datalist.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    IonicModule,
    DatalistPageRoutingModule
  ],
  declarations: [DatalistPage]
})
export class DatalistPageModule {}
