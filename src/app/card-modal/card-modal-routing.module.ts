import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CardModalPage } from './card-modal.page';

const routes: Routes = [
  {
    path: '',
    component: CardModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardModalPageRoutingModule { }
