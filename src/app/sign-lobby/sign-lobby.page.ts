import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-sign-lobby',
  templateUrl: './sign-lobby.page.html',
  styleUrls: ['./sign-lobby.page.scss'],
})
export class SignLobbyPage implements OnInit {

  constructor(private storage: Storage) { }

  ngOnInit() {
    this.storage.create();
  }

}
