import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.page.html',
  styleUrls: ['./vehiculo.page.scss'],
})
export class VehiculoPage implements OnInit {

  form!:FormGroup
  constructor(private fb: FormBuilder, private api: ApiService, private storage: Storage) { }

  async ngOnInit() {
    this.storage.create()
    this.crearFormulario()
  }

  crearFormulario() {
    this.form = this.fb.group({
      patente:['', [Validators.required]],
      marca:['', [Validators.required]],
      modelo:['', [Validators.required]],
      capacidad:['', [Validators.required]],
      nombre_usuario:['', [Validators.required]],
    })
  }

  RegisterVehiculo(){
    this.api.registerVehiculo(this.form.value).subscribe(
      (response) => {
        console.log('Registrado exitosamente')
      },
      (error) => {
        console.error('Error al registrar', error)
      }
    )
  };
}
