import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigModule } from '../config/config.module';

@Injectable({
  providedIn: 'root'
})
export class GetDataByApiService {

  public api_url = new ConfigModule().API_URL;

  constructor(private http: HttpClient) { }

  public getFkData(url: any): Observable<any> {
    return this.http.get(url);
  }

  public getData(tabla: any): Observable<any> {
    return this.http.get(this.api_url+tabla);
  }

  public getDataforColums(tabla: any, columnas: any): Observable<any> {
    return this.http.get(this.api_url+tabla+'/onlyShow?'+columnas);
  }

  public getColumns(tabla: any){
    return this.http.get(this.api_url+tabla+'/columns/');
  }

  public getPK(tabla: any){
    return this.http.get(this.api_url+tabla+'/getPk');
  }

  public getOneData(tabla:any, campo:any, registro: any): Observable<any> {
    return this.http.get(`${this.api_url}${tabla}/${campo}/${registro}`);
  }

  public getJoinData(tabla: any, joinTables: any, onConditions: any, selectedColumns: any): Observable<any> {
    return this.http.get(this.api_url+tabla+'/join?'+joinTables+'&'+onConditions+'&'+selectedColumns);
  }

  public getFullData(tabla: any, joinTables: any, onConditions: any, selectedColumns: any): Observable<any> {
    return this.http.get(this.api_url+'universidad/Fulljoin?'+joinTables+'&'+onConditions+'&'+selectedColumns);
  }

  public getJoinDataWhere(tabla: any, joinTables: any, onConditions: any, selectedColumns: any, where: any): Observable<any> {
    return this.http.get(this.api_url+tabla+'/joinwhere?'+joinTables+'&'+onConditions+'&'+selectedColumns+'&'+where);
  }
}
