import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigModule } from '../config/config.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateDataByApiService {

  public api_url = new ConfigModule().API_URL;

  constructor(private http: HttpClient) { }

  public updateData(tabla: any, valor: any, campo: any, datos: any): Observable<any> {
    return this.http.put(`${this.api_url}${tabla}/${campo}/${valor}`, datos);
  }
}
