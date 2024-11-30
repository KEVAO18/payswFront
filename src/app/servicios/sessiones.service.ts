import { Injectable } from '@angular/core';
import { ConfigModule, usuario } from '../config/config.module';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionesService {

  public api_url = new ConfigModule().API_URL;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  public valUserData(tabla: any, datos: any): Observable<any> {
    return this.http.post(this.api_url+tabla+'/verificar-contrasena', datos, { responseType: 'text' }).pipe(
      map((response: any) => {
        if (response === 'Contraseña verificada exitosamente.') {
          return response;
        } else {
          throw new Error('Contraseña incorrecta');
        }
      }),
    catchError(this.handleError)
    );
  }

  public isLocalStorageAvailable(): boolean {
    return typeof localStorage !== 'undefined';
  }

  public isAdmin(): boolean {
    if (this.isLocalStorageAvailable()) {
      const userInfo: usuario = JSON.parse(localStorage.getItem('userOnline') || '{}');
      return userInfo.idRol === 1;
    }
    return false;
  }

  public isAuth(): boolean {
    return this.isLocalStorageAvailable() && !!localStorage.getItem('userOnline');
  }

  public logOut(): void {
    if (this.isLocalStorageAvailable()) {
      localStorage.removeItem('userOnline');
    }
    this.router.navigate(['/']);
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Ocurrió un error desconocido';
    if (error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // El backend retornó un código de error
      errorMessage = `Código de error ${error.status}, mensaje: ${error.error}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }

}
