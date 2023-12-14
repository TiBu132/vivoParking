import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-estacionamiento',
  templateUrl: './estacionamiento.page.html',
  styleUrls: ['./estacionamiento.page.scss'],
})
export class EstacionamientoPage implements OnInit {

  form!:FormGroup
  constructor(private fb: FormBuilder, private api: ApiService, private storage: Storage) { }

  async ngOnInit() {
    this.storage.create()
    this.crearFormulario()
  }

  crearFormulario() {
    this.form = this.fb.group({
      ubicacion:['', [Validators.required]],
      costo:['', [Validators.required]],
      patente:['', [Validators.required]],
      nombre_usuario_dueño:['', [Validators.required]],
      espacio:['', [Validators.required]],
      descripcion:['', [Validators.required]],
    })
  }

  RegisterEstacionamiento(){
    this.api.registerEstacionamiento(this.form.value).subscribe(
      (response) => {
        console.log('Registrado exitosamente')
      },
      (error) => {
        console.error('Error al registrar', error)
      }
    )
  };
}
