import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HearderComponent } from './hearder/hearder.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    HearderComponent
  ],
  exports: [
    HearderComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
  ]

})
export class ComponentsModule { }
