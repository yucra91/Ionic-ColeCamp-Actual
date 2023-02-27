import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-login',
  templateUrl: './inicio-login.page.html',
  styleUrls: ['./inicio-login.page.scss'],
})
export class InicioLoginPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  redireccionIngresar(){
    this.router.navigateByUrl('login-new');
  }
  redireccionRegistrar(){
    this.router.navigateByUrl('singup');
  }
}
