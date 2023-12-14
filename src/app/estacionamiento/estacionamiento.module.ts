import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EstacionamientoPageRoutingModule } from './estacionamiento-routing.module';

import { EstacionamientoPage } from './estacionamiento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EstacionamientoPageRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [EstacionamientoPage]
})
export class EstacionamientoPageModule {}
