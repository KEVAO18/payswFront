import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteDataByApiService {

  constructor(private http: HttpClient) { }

  public deleteData(tabla: any, campo: any, registro: any): Observable<any> {
    return this.http.delete('http://localhost:7058/api/paysw2/'+tabla+'/'+campo+'/'+registro);
  }
}
