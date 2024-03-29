import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginNewPageRoutingModule } from './login-new-routing.module';

import { LoginNewPage } from './login-new.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginNewPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [LoginNewPage]
})
export class LoginNewPageModule {}
