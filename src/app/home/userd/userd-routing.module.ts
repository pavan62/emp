import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserdPage } from './userd.page';

const routes: Routes = [
  {
    path: '',
    component: UserdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserdPageRoutingModule {}
