import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ConfigModule {

  public titulo = 'Modulo 2';

  public subTitulo = 'Innovación curricular';

  public describcion = 'Este proyecto es una aplicacion web que consume un API en C#';

  public API_URL = 'http://localhost:7058/api/ProyectoBackendCsharp/';

  public API_TABLAS = [

    // tablas sin fk
    { tabla: 'car_innovacion', url: this.API_URL+'car_innovacion' },
    { tabla: 'aliado', url: this.API_URL+'aliado' },
    { tabla: 'universidad', url: this.API_URL+'universidad' },
    { tabla: 'enfoque', url: this.API_URL+'enfoque' },
    { tabla: 'aspecto_normativo', url: this.API_URL+'aspecto_normativo' },
    { tabla: 'practica_estrategica', url: this.API_URL+'practica_estrategica' },

    // tablas con fk
    { tabla: 'programa_ci', url: this.API_URL+'programa_ci' },
    { tabla: 'enfoque_rc', url: this.API_URL+'enfoque_rc' },
    { tabla: 'aa_rc', url: this.API_URL+'aa_rc' },
    { tabla: 'programa_pe', url: this.API_URL+'programa_pe' },
    { tabla: 'docente_departamento', url: this.API_URL+'docente_departamento' },
    { tabla: 'alianza', url: this.API_URL+'alianza' },
    { tabla: 'an_programa', url: this.API_URL+'an_programa' },
    { tabla: 'premio', url: this.API_URL+'premio' },
    { tabla: 'activ_academica', url: this.API_URL+'activ_academica' },
    { tabla: 'registro_calificado', url: this.API_URL+'registro_calificado' },
    { tabla: 'acreditacion', url: this.API_URL+'acreditacion' },
    { tabla: 'facultad', url: this.API_URL+'facultad' },
    { tabla: 'programa', url: this.API_URL+'programa' },
    { tabla: 'pasantia', url: this.API_URL+'pasantia' },
    { tabla: 'programa_ac', url: this.API_URL+'programa_ac' }

  ];

  public menu = [

    { titulo: 'Home', url: 'home'},
    { titulo: 'Tablas', url: 'tablas'}
    
  ];

}
