import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SlidesInicioPageRoutingModule } from './slides-inicio-routing.module';

import { SlidesInicioPage } from './slides-inicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SlidesInicioPageRoutingModule
  ],
  declarations: [SlidesInicioPage]
})
export class SlidesInicioPageModule {}
