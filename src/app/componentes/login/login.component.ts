import { SessionesService } from './../../servicios/sessiones.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string | null = null;
  isLoading = false;
  showPassword = false;

  constructor(
    private fb: FormBuilder, 
    private authService: SessionesService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.isLoading = true;
      this.errorMessage = null;

      const userData = {
        campoUsuario: 'usuario',
        campoContrasena: 'contrasena',
        valorUsuario: this.loginForm.get('userName')?.value,
        valorContrasena: this.loginForm.get('password')?.value
      };

      this.authService.valUserData('usuarios', userData).subscribe({
        next: (response) => {
          console.log('Login successful', response);
          localStorage.setItem('userOnline', userData.valorUsuario);
          this.router.navigate(['/tablas']);
          this.errorMessage = 'Todo correcto';
        },
        error: (error) => {
          if (error.status === 401) {
            this.errorMessage = 'Usuario o contraseña incorrectos';
          } else {
            this.errorMessage = 'Ocurrió un error al iniciar sesión. Por favor, intente de nuevo.';
          }
          console.error('Error logging in', error);
          this.isLoading = false;
        },
        complete: () => {
          this.isLoading = false;
        }
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}