import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SimularPageRoutingModule } from './simular-routing.module';

import { SimularPage } from './simular.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SimularPageRoutingModule
  ],
  declarations: [SimularPage]
})
export class SimularPageModule {}
