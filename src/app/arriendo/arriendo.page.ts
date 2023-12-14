import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-arriendo',
  templateUrl: './arriendo.page.html',
  styleUrls: ['./arriendo.page.scss'],
})
export class ArriendoPage implements OnInit {

  estacionamiento: any[]=[]

  constructor(private api: ApiService, private storage: Storage) { 
    this.api.getEstacionamiento().subscribe(
      (response) =>{
        console.log(response)
          this.estacionamiento = response
      }
    )
  }

  ngOnInit() {
    this.storage.create()
  }

}
