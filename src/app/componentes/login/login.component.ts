import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateDataByApiService } from '../../servicios/create-data-by-api.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder, private authService: CreateDataByApiService) {

    this.loginForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });

  }
  

  onSubmit() {
  
    const userd = {
      "campoUsuario": 'usuario',
      "campoContrasena": 'Contrasena',
      "valorUsuario": this.loginForm.get('userName')?.value,
      "valorContrasena": this.loginForm.get('password')?.value
    };

    console.log(userd);

    // si status es 200, entonces se redirige a la página de inicio y se guarda el token en el local storage pero si status es 401, entonces se muestra un mensaje de error
    this.authService.valUserData('usuarios', userd);

  }

}
