import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { ApiService } from '../service/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  form! : FormGroup;
  formulario: number=0;
  constructor(private storage: Storage, private api: ApiService, private fb: FormBuilder) { }

  crearFormulario() {
    this.form = this.fb.group({
      nombre_usuario:['', [Validators.required]],
      pnombre:['', [Validators.required]],
      ppaterno:['', [Validators.required]],
      contraseña:['', [Validators.required]],
      rut:['', [Validators.required]],
      direccion:['', [Validators.required]],
      num_casa:['', [Validators.required]],
      pass_usuario:['', [Validators.required]],
    })
  }
  ngOnInit() {
    this.storage.create()
    this.crearFormulario()
  }

  registerUser(){
    console.log(this.form.value)
    this.api.registerUser(this.form.value).subscribe(
      response => {
        console.log("Usuario Registrado Exitosamente", response)
      },
      error => {
        console.log("No Funciona", error)
      }
    );
  }
}
