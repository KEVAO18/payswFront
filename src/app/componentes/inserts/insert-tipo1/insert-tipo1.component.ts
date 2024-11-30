import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GetDataByApiService } from '../../../servicios/get-data-by-api.service';
import { CreateDataByApiService } from '../../../servicios/create-data-by-api.service';

@Component({
  selector: 'app-insert-tipo1',
  templateUrl: './insert-tipo1.component.html',
  styleUrl: './insert-tipo1.component.scss'
})
export class InsertTipo1Component implements OnInit {
  @Input() tabla!: string;

  form!: FormGroup;
  
  columns: any[] = [];

  constructor(private fb: FormBuilder, private obtener: GetDataByApiService, private crear: CreateDataByApiService) {}

  ngOnInit(): void {
    this.loadColumns(this.tabla);
  }

  loadColumns(tableName: string) {
    this.form = this.fb.group({});
    this.obtener.getColumns(tableName).subscribe((columns) => {
      this.columns = [columns];
      this.buildForm();
    });
  }

  buildForm() {
    const formControls: any = {};
    this.columns[0].forEach((col: any) => {
      const validators = [];

      validators.push(Validators.required);

      // Agregar validaciones según el tipo de dato
      if (col.tipoDato === 'nvarchar' && (col.longitudMaxima && col.longitudMaxima != null && col.longitudMaxima > 0)) {
        validators.push(Validators.maxLength(col.longitudMaxima));
      }else{
        validators.push(Validators.maxLength(255))
      }

      // Agregar el control al formulario
      formControls[col.nombre] = ['', validators];
    });

    this.form = this.fb.group(formControls);
  }

  getFieldType(tipoDato: string): string {
    switch (tipoDato) {
      case 'int':
      case 'float':
      case 'decimal':
        return 'number';
      case 'nvarchar':
      case 'varchar':
      case 'text':
        return 'text';
      case 'date':
        return 'date';
      default:
        return 'text';
    }
  }

  onSubmit() {
    this.crear.sendData(this.tabla, this.form.value, 'text').subscribe(
      (response) => {
        if (response == 'Entidad creada exitosamente.') {
          alert('Registro exitoso');
        } else {
          alert('Registro fallido');
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
