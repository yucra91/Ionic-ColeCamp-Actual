import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, CanLoad } from '@angular/router';
import { AuthenticationGuard } from './core/authentication.guard';
import { UsuarioGuard } from './guards/usuario.guard';


const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule),
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule),
    // canActivate:[UsuarioGuard]
    canLoad:[UsuarioGuard]
  },
  {
    path: 'usuario',
    loadChildren: () => import('./pages/usuario/usuario.module').then( m => m.UsuarioPageModule)
  },
  {
    path: 'estudiante',
    loadChildren: () => import('./pages/estudiante/estudiante.module').then( m => m.EstudiantePageModule)
  },
  {
    path: 'docente',
    loadChildren: () => import('./pages/docente/docente.module').then( m => m.DocentePageModule)
  },
  {
    path: 'datalist',
    loadChildren: () => import('./pages/datalist/datalist.module').then( m => m.DatalistPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./Auth/sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  // ,
  // {
  //   path: 'create-usuario',
  //   loadChildren: () => import('./pages/usuario/create-usuario/create-usuario.module').then( m => m.CreateUsuarioPageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
