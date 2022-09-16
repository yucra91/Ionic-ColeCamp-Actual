import { IonicStorageModule } from '@ionic/storage-angular';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { MenuPageModule } from './menu/menu.module';
import { CookieService } from 'ngx-cookie-service';
import { AuthInterceptor } from './core/auth.interceptor';
import { SQLite } from '@ionic-native/sqlite/ngx';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
     IonicModule.forRoot(), 
     AppRoutingModule,
    HttpClientModule,
    MenuPageModule,
    IonicStorageModule.forRoot(),
   
    ],
  providers: [HttpClientModule,Storage,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, CookieService,{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA],
})
export class AppModule {}
