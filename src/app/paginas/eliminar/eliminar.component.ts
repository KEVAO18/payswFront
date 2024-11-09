import { Component } from '@angular/core';
import { DeleteDataByApiService } from '../../servicios/delete-data-by-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrl: './eliminar.component.scss'
})
export class EliminarComponent {

  constructor(private servidioDelete: DeleteDataByApiService, private route: ActivatedRoute){}

  ngOnInit(): void {

    let tabla: any;
    let campo: any;
    let registro: any;

    this.route.paramMap.subscribe(
      params => {
        tabla = params.get('tabla');
        campo = params.get('campo');
        registro = params.get('registro');
      }
    );

    this.servidioDelete.deleteData(tabla, campo, registro).subscribe(
      (data: any) => {
        alert("Eliminado correctamente");
      },
      (error: any) => {
        alert("Error al eliminar");
      }
    );
  }

}
