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

  public sendData(tabla: string, datos: any, tipoRespuesta = 'json'): Observable<any> {
    if(tipoRespuesta == 'text'){
      return this.http.post(this.api_url + tabla, datos, { 
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        responseType: 'text'
      }).pipe(
        catchError(this.handleError)
      );
    }else{
      return this.http.post(this.api_url + tabla, datos, { 
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        responseType: 'json'
      }).pipe(
        catchError(this.handleError)
      );
    }
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
    return throwError(() => new Error(errorMessage));
  }
}
