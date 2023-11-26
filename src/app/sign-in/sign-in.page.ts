import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { ApiService } from '../service/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  form!: FormGroup;
  msg: string= '';
  constructor(private router: Router, private api: ApiService, private storage: Storage, private fb:FormBuilder) { 
    this.crearFormulario()
  }

  crearFormulario() {
    this.form = this.fb.group({
      usuario:['', [Validators.required, Validators.minLength(5)]],
      pass:['', [Validators.required]]  ,
    })
  }

  ngOnInit() {
    this.storage.create();
  }

  getUser() {
    console.log(this.form.value)
    this.api.postData(this.form.value).subscribe((response)=>{
      this.router.navigate(['./home'])
    });
  }
}