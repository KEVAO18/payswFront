import { Component, Input } from '@angular/core';
import { GetDataByApiService } from '../../servicios/get-data-by-api.service';

@Component({
  selector: 'app-mostrar-registro',
  templateUrl: './mostrar-registro.component.html',
  styleUrl: './mostrar-registro.component.scss'
})
export class MostrarRegistroComponent {
  @Input() tabla!: any;
  @Input() registro!: any;
  @Input() campo!: any;

  private datos_sec: any;

  public datos: any;

  public claves: string[] = [];
  
  public claves_sec: string[] = [];

  constructor(private ServicioDatos: GetDataByApiService){ }

  ngOnInit(): void {

    this.ServicioDatos.getOneData(this.tabla, this.campo, this.registro).subscribe(
      (data: any[]) => {
        this.datos_sec = data;

        if(this.datos_sec.length > 0){
          console.log(this.datos_sec);
          this.claves_sec = Object.keys(this.datos_sec[0]);
        }else{
          console.log('No hay datos');
          this.claves_sec = [];
        }
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
