import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateDataByApiService } from '../../servicios/create-data-by-api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

registro: FormGroup;


  constructor(private fb: FormBuilder, private crear: CreateDataByApiService){
    this.registro = this.fb.group({
      docu: ['', Validators.required],
      fullName: ['', Validators.required],
      userName: ['', Validators.required],
      mail: ['', Validators.required],
      Contrasena: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit(){
    const datos = {
      "documento": this.registro.get('docu')?.value,
      "nombre": this.registro.get('fullName')?.value,
      "usuario": this.registro.get('userName')?.value,
      "Contrasena": this.registro.get('Contrasena')?.value,
      "email": this.registro.get('mail')?.value
    }

    this.crear.sendData('usuarios', datos, 'text').subscribe(
      (response) => {
        if (response === 'Entidad creada exitosamente.') {
          alert("Ok");
        } else {
          alert("Error, intente de nuevo");
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
