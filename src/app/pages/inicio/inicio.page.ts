import { Component, OnInit } from '@angular/core';
import { Componente } from '../../interfaces/interfaces';
import { Observable } from 'rxjs';
import { UserService } from '../../service/user.service';

import { RouteInfo } from '../../interfaces/sidebar';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Observable<Componente[]>;
  Usuario: RouteInfo[];
  user_name:string="";
  rol:string=null;

  constructor(
  
    private dataService: UserService,
 
    private userService:UserService,
  ) { 
    this.dataService.getMenu();
  }

  ngOnInit() {
    this.componentes=this.dataService.getMenuOpts();
    this.Usuario=this.dataService.getData();
    console.log(this.Usuario);
    
    this.rol=this.userService.rol();
    console.log(this.rol);
    
  }
  logout(){
    this.userService.logout();
  }

}
