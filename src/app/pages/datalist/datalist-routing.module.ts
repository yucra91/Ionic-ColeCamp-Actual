import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatalistPage } from './datalist.page';

const routes: Routes = [
  {
    path: '',
    component: DatalistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatalistPageRoutingModule {}
