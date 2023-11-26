import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignLobbyPageRoutingModule } from './sign-lobby-routing.module';

import { SignLobbyPage } from './sign-lobby.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignLobbyPageRoutingModule
  ],
  declarations: [SignLobbyPage]
})
export class SignLobbyPageModule {}
