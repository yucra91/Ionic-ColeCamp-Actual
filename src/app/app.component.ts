import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Componente } from './interfaces/interfaces';
import { UserService } from './service/user.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  componentes: Observable<Componente[]>;
  constructor(
    private dataService: UserService,
    private storage:Storage,
  ) {
    this.componentes=this.dataService.getMenuOpts();
    this.storage.create();
  }
}
