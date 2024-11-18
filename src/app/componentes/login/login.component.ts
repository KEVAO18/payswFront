import { ConfigModule, usuario } from './../../config/config.module';
import { GetDataByApiService } from './../../servicios/get-data-by-api.service';
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

  public user?: usuario;

  constructor(
    private fb: FormBuilder, 
    private authService: SessionesService,
    private query: GetDataByApiService,
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

          // tablas a unir
          let joinT: string = "joinTables=usuarios&joinTables=tiposCredenciales";

          // condiciones para unir las tablas
          let onC: string = "onConditions=usuarios.id=credenciales.usuarios&onConditions=credenciales.tiposCredenciales=tiposCredenciales.id";

          // columnas a mostrar
          let columns: string = "selectedColumns=usuarios.id as id&selectedColumns=usuarios.usuario as nombreUsuario&selectedColumns=usuarios.nombre as nombre&selectedColumns=usuarios.email as email&selectedColumns=tiposCredenciales.id as idRol";

          let where: string = "whereClause=usuarios.usuario='"+userData.valorUsuario+"'";

          // obteniendo datos de la tabla credenciales
          this.query.getJoinDataWhere('credenciales', joinT, onC, columns, where).subscribe({
            next: (response) => {
              this.user = response[0];

              // se convierte a string para poder almacenar en localStorage
              localStorage.setItem('userOnline', JSON.stringify(this.user));

              // redirige a la página dashboard
              this.router.navigate(['/tablas']);
              
              this.errorMessage = 'Todo correcto';

            }
          });
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