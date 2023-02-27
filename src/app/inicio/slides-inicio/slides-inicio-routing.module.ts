import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SlidesInicioPage } from './slides-inicio.page';

const routes: Routes = [
  {
    path: '',
    component: SlidesInicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SlidesInicioPageRoutingModule {}
