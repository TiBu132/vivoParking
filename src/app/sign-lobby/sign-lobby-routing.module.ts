import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignLobbyPage } from './sign-lobby.page';

const routes: Routes = [
  {
    path: '',
    component: SignLobbyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignLobbyPageRoutingModule {}
