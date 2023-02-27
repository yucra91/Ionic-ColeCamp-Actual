import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsEstudiantePage } from './tabs-estudiante.page';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/tabs-estudiante/inicio-estudiante',
    pathMatch: 'full',
  },
  {
    path: '',
    component: TabsEstudiantePage,
    children: [
      {
        path: 'inicio-estudiante',
        loadChildren: () => import('../inicio-estudiante/inicio-estudiante.module').then(m => m.InicioEstudiantePageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsEstudiantePageRoutingModule {}
