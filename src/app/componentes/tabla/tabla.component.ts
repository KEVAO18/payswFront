import { ConfigModule } from '../../config/config.module';
import { GetDataByApiService } from '../../servicios/get-data-by-api.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.scss'
})
export class TablaComponent {
  @Input() tabla!: string;

  public datos: any;

  public claves: string[] = [];

  constructor(private ServicioDatos: GetDataByApiService){ }

  ngOnInit(): void {

    this.ServicioDatos.getData(this.tabla).subscribe(
      (data: any[]) => {
        this.datos = data;

        if(this.datos.length > 0){
          console.log(this.datos);
          this.claves = Object.keys(this.datos[0]);
        }else{
          console.log('No hay datos');
          this.claves = [];
        }
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
