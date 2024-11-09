import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigModule } from '../config/config.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateDataByApiService {

  public api_url = new ConfigModule().API_URL;

  constructor(private http: HttpClient) { }

  public sendData(tabla: any, datos: any): Observable<any> {
    return this.http.post(this.api_url+tabla, datos, { headers: new HttpHeaders( { 'Content-Type': 'application/json' } ) } );
  }

  public valUserData(tabla: any, datos: any): Observable<any> {
    return this.http.post(this.api_url+tabla+'/verificar-contrasena', datos, { headers: new HttpHeaders( { 'Content-Type': 'application/json' } ) } );
  }
}
