import { Component, OnInit, ViewChild } from '@angular/core';
import { IonList } from '@ionic/angular';

import { Observable } from 'rxjs';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-datalist',
  templateUrl: './datalist.page.html',
  styleUrls: ['./datalist.page.scss'],
})
export class DatalistPage implements OnInit {

  @ViewChild(IonList) ionList:IonList;

  usuarios:Observable<any>;
  constructor( private dataService: DataService) { }

  ngOnInit() {
    // this.usuarios = this.dataService.getUsuario();
    // this.dataService.getUsuario().subscribe(console.log);
  }

  favorite(user:any){
    console.log('favorito ',user);
    this.ionList.closeSlidingItems();
  }

  share(user:any){
    console.log('share ',user);
    
  }
  eliminar(user:any){
    console.log('share ',user);
    
  }

}
