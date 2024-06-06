import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SolutionPageRoutingModule } from './solution-routing.module';

import { SolutionPage } from './solution.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SolutionPageRoutingModule
  ],
  declarations: [SolutionPage]
})
export class SolutionPageModule {}
