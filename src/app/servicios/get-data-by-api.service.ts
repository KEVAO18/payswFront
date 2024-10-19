import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDataByApiService {

  constructor(private http: HttpClient) { }

  public getData(tabla: any): Observable<any> {
    return this.http.get('http://localhost:7058/api/paysw2/'+tabla);
  }
}
