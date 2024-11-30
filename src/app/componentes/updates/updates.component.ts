import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GetDataByApiService } from '../../servicios/get-data-by-api.service';
import { UpdateDataByApiService } from '../../servicios/update-data-by-api.service';

@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrl: './updates.component.scss'
})
export class UpdatesComponent {
  form!: FormGroup;
  tabla!: string; // Nombre de la tabla
  registroId!: string; // ID del registro que se desea actualizar
  claves: string[] = []; // Claves para mostrar en la tabla
  datos: any[] = []; // Datos del registro a actualizar

  constructor(
    private fb: FormBuilder,
    private obtener: GetDataByApiService,
    private update: UpdateDataByApiService
  ) {}

  ngOnInit(): void {
    this.loadRecord(); // Cargar el registro al inicializar el componente
  }

  // Cargar el registro que se quiere actualizar
  loadRecord() {
    // Aquí llamamos a tu método getOneData para obtener el registro específico
    this.obtener.getOneData(this.tabla, 'id', this.registroId).subscribe((data) => {
      this.datos = [data]; // Asumimos que data es el registro encontrado
      this.buildForm(data); // Pasamos los datos para construir el formulario
    });
  }

  // Construcción del formulario con los datos obtenidos
  buildForm(data: any) {
    const formControls: any = {};
    this.claves.forEach((clave) => {
      formControls[clave] = [data[clave] || '', Validators.required]; // Asegúrate de poner la validación adecuada
    });
    this.form = this.fb.group(formControls);
  }

}
