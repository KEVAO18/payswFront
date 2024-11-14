import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigModule } from '../config/config.module';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateDataByApiService {

  public api_url = new ConfigModule().API_URL;

  constructor(private http: HttpClient) { }

  public sendData(tabla: string, datos: any): Observable<any> {
    return this.http.post(this.api_url + tabla, datos, { 
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }).pipe(
      catchError(this.handleError)
    );
  }

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
