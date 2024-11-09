import { join } from 'node:path';
import { ConfigModule } from '../../config/config.module';
import { DeleteDataByApiService } from '../../servicios/delete-data-by-api.service';
import { GetDataByApiService } from '../../servicios/get-data-by-api.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.scss'
})
export class TablaComponent {
  @Input() tabla!: string;

  public config: ConfigModule = new ConfigModule();

  public pk: any;

  public datos: any;

  public claves: string[] = [];

  public objetoTabla: any;


  constructor(private ServicioDatos: GetDataByApiService, private serviciosDelete: DeleteDataByApiService) { }

  ngOnInit(): void {

    this.objetoTabla = this.config.API_TABLAS.find((element: any) => element.tabla == this.tabla);

    if (this.objetoTabla.tipo == 1 || this.objetoTabla.tipo == 4) {

      this.ServicioDatos.getData(this.tabla).subscribe(
        (data: any[]) => {
          this.datos = data;

          if (this.datos.length > 0) {
            this.claves = Object.keys(this.datos[0]);
          } else {
            this.claves = [];
          }
        },
        (error: any) => {
          console.error(error);
        }
      );
    } else if (this.objetoTabla.tipo == 2) {

      //uniendo las tablas que tienen la fk para hacer el join
      let joinTables: any = this.objetoTabla.col_Int[0].tablasHermanas.map((element: any) => {
        return 'joinTables=' + element;
      });
      joinTables = joinTables.join('&');

      //uniendo las condiciones para hacer el join
      let onConditions: any = this.objetoTabla.col_Int[0].condiciones.map((element: any) => {
        return 'onConditions=' + element;
      });
      onConditions = onConditions.join('&');

      //uniendo las columnas a mostrar
      let selectedColumns: any = this.objetoTabla.col_Int[0].mostrar.map((element: any) => {
        return 'selectedColumns=' + element;
      });
      selectedColumns = selectedColumns.join('&');

      //haciendo la peticion al api

      this.ServicioDatos.getJoinData(this.tabla, joinTables, onConditions, selectedColumns).subscribe(
        (data: any[]) => {
          this.datos = data;

          if (this.datos.length > 0) {
            this.claves = Object.keys(this.datos[0]);
          } else {
            this.claves = [];
          }
        },
        (error: any) => {
          console.error(error);
        }
      );

    } else {
      console.error('Tipo de tabla no valido');
    }

  }
}
