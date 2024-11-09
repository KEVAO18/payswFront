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
      fullName: ['', Validators.required],
      userName: ['', Validators.required],
      mail: ['', Validators.required],
      Contrasena: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit(){
    const datos = {
      "nombre": this.registro.get('fullName')?.value,
      "Contrasena": this.registro.get('Contrasena')?.value,
      "usuario": this.registro.get('userName')?.value,
      "email": this.registro.get('mail')?.value
    }

    console.log(datos);

    this.crear.sendData('usuarios', datos).subscribe(
      (response) => {
        console.log(response);
        if (response === 'Usuario creado exitosamente.') {
          console.log('Registro exitoso');
        } else {
          console.log('Registro fallido');
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
