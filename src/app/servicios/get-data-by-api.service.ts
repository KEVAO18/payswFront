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

  public getColumns(tabla: any){
    return this.http.get('http://localhost:7058/api/paysw2/'+tabla+'/columns/');
  }

  public getOneData(tabla:any, campo:any, registro: any): Observable<any> {
    return this.http.get('http://localhost:7058/api/paysw2/'+tabla+'/'+campo+'/'+registro);
  }

  public getJoinData(tabla: any, joinTables: any, onConditions: any, selectedColumns: any): Observable<any> {
    return this.http.get('http://localhost:7058/api/paysw2/'+tabla+'/join?'+joinTables+'&'+onConditions+'&'+selectedColumns);
  }
}
