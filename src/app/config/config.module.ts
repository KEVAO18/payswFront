import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface usuario {
  id: number;
  nombreUsuario: string;
  nombre: string;
  email: string;
  idRol: number;
}

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

  public API_URL = 'http://localhost:7058/api/paysw2/';

  public API_TABLAS = [

    // tablas sin fk
    { tabla: 'car_innovacion', url: this.API_URL + 'car_innovacion', tipo: 1, col_Int: [] },
    { tabla: 'aliado', url: this.API_URL + 'aliado', tipo: 1, col_Int: [] },
    { tabla: 'universidad', url: this.API_URL + 'universidad', tipo: 1, col_Int: [] },
    { tabla: 'enfoque', url: this.API_URL + 'enfoque', tipo: 1, col_Int: [] },
    { tabla: 'aspecto_normativo', url: this.API_URL + 'aspecto_normativo', tipo: 1, col_Int: [] },
    { tabla: 'practica_estrategia', url: this.API_URL + 'practica_estrategia', tipo: 1, col_Int: [] },
    { tabla: 'tiposCredenciales', url: this.API_URL + 'tiposcredenciales', tipo: 1, col_Int: [] },
    { tabla: 'usuarios', url: this.API_URL + 'usuarios', tipo: 4, col_Int: [
      {
        mostrar: [
          'id',
          'nombre',
          'usuario',
          'email'
          ]
      } 
    ] },
    
    // tablas con fk
    
    // ejemplo de la url final http://localhost:7058/api/proyectoEjemplo/programa_ci/join?joinTables=programa&joinTables=car_innovacion&onConditions=programa.id=programa_ci.programa&onConditions=car_innovacion.id=programa_ci.car_innovacion&selectedColumns=programa.nombre%20AS%20Programa&selectedColumns=car_innovacion.nombre%20AS%20Car_innovacion
    {
      tabla: 'credenciales', url: this.API_URL + 'credenciales', tipo: 2, col_Int: [
        {
          tablasHermanas: ['usuarios', 'tiposCredenciales'],
          condiciones: ['usuarios.id = credenciales.usuarios', 'tiposCredenciales.id = credenciales.tiposCredenciales'],
          mostrar: [
            'usuarios.id as id',
            'usuarios.usuario AS usuario',
            'usuarios.nombre as nombre',
            'usuarios.email as email',
            'tiposCredenciales.id as idRol'
          ]
        }
      ]
    },
    {
      tabla: 'programa_ci', url: this.API_URL + 'programa_ci', tipo: 2, col_Int: [
        {
          tablasHermanas: ['programa', 'car_innovacion'],
          condiciones: ['programa.id = programa_ci.programa', 'car_innovacion.id = programa_ci.car_innovacion'],
          mostrar: ['programa.nombre AS Programa', 'car_innovacion.nombre AS Car_innovacion']
        }
      ]
    },
    {
      tabla: 'enfoque_rc', url: this.API_URL + 'enfoque_rc', tipo: 2, col_Int: [
        {
          tablasHermanas: ['enfoque', 'registro_calificado', 'programa'],
          condiciones: ['enfoque.id = enfoque_rc.enfoque', 'registro_calificado.codigo = enfoque_rc.registro_calificado', 'programa.id = registro_calificado.programa'],
          mostrar: ['enfoque.nombre AS Enfoque', 'programa.nombre AS Programa', 'registro_calificado.cant_creditos AS Cantidad_de_creditos']
        }
      ]
    },
    {
      tabla: 'aa_rc', url: this.API_URL + 'aa_rc', tipo: 2, col_Int: [
        {
          tablasHermanas: ['registro_calificado', 'activ_academica', 'programa'],
          condiciones: ['registro_calificado.codigo = aa_rc.registro_calificado_codigo', 'activ_academica.id = aa_rc.activ_academicas_idcurso', 'programa.id = registro_calificado.programa'],
          mostrar: ['activ_academica.nombre AS Actividad', 'programa.nombre AS Programa', 'aa_rc.componente AS Componente', 'aa_rc.semestre AS Semestre']
        }
      ]
    },
    {
      tabla: 'programa_pe', url: this.API_URL + 'programa_pe', tipo: 2, col_Int: [
        {
          tablasHermanas: ['programa', 'practica_estrategia'],
          condiciones: ['programa.id = programa_pe.programa', 'practica_estrategia.id = programa_pe.practica_estrategia'],
          mostrar: ['programa.nombre as programa', 'practica_estrategia.nombre as practica_estrategia']
        }
      ]
    },
    {
      tabla: 'docente_departamento', url: this.API_URL + 'docente_departamento', tipo: 2, col_Int: [
        {
          tablasHermanas: ['docente', 'programa'],
          condiciones: ['docente.cedula = docente_departamento.docente', 'programa.id = docente_departamento.departamento'],
          mostrar: ['docente.nombres as Docente', 'programa.nombre as Programa', 'dedicacion', 'modalidad', 'fecha_ingreso', 'fecha_salida']
        }
      ]
    },
    {
      tabla: 'alianza', url: this.API_URL + 'alianza', tipo: 2, col_Int: [
        {
          tablasHermanas: ['docente', 'programa', 'aliado'],
          condiciones: ['docente.cedula = alianza.docente', 'programa.id = alianza.departamento', 'aliado.nit = alianza.aliado'],
          mostrar: ['aliado.razon_social as aliado', 'programa.nombre as departamento', 'fecha_inicio', 'fecha_fin', 'docente.nombres as docente']
        }
      ]
    },
    {
      tabla: 'an_programa', url: this.API_URL + 'an_programa', tipo: 2, col_Int: [
        {
          tablasHermanas: ['aspecto_normativo', 'programa'],
          condiciones: ['aspecto_normativo.id = an_programa.aspecto_normativo','programa.id = an_programa.programa'],
          mostrar: ['aspecto_normativo.descripcion as aspecto_normativo', 'programa.nombre as programa']
        }
      ]
    },
    {
      tabla: 'premio', url: this.API_URL + 'premio', tipo: 2, col_Int: [
        {
          tablasHermanas: ['programa'],
          condiciones: ['programa.id = premio.programa'],
          mostrar: ['premio.id', 'premio.nombre', 'descripcion', 'fecha', 'entidad_otorgante', 'pais', 'programa.nombre as programa']
        }
      ]
    },
    {
      tabla: 'activ_academica', url: this.API_URL + 'activ_academica', tipo: 2, col_Int: [
        {
          tablasHermanas: ['programa'],
          condiciones: ['programa.id = activ_academica.disenio'],
          mostrar: ['activ_academica.id', 'activ_academica.nombre', 'num_creditos', 'activ_academica.tipo', 'area_formacion', 'h_acom', 'h_indep', 'idioma', 'espejo', 'entidad_espejo', 'pais_espejo', 'programa.nombre as disenio']
        }
      ]
    },
    {
      tabla: 'registro_calificado', url: this.API_URL + 'registro_calificado', tipo: 2, col_Int: [
        {
          tablasHermanas: ['programa'],
          condiciones: ['programa.id = registro_calificado.programa'],
          mostrar: ['codigo','cant_creditos','hora_acom','hora_ind','metodologia','fecha_inicio','fecha_fin','duracion_anios','duracion_semestres','tipo_titulacion','programa.nombre']
        }
      ]
    },
    {
      tabla: 'acreditacion', url: this.API_URL + 'acreditacion', tipo: 2, col_Int: [
        {
          tablasHermanas: ['programa'],
          condiciones: ['programa.id = acreditacion.programa'],
          mostrar: ['resolucion', 'acreditacion.tipo', 'calificacion', 'fecha_inicio', 'fecha_fin', 'programa.nombre']
        }
      ]
    },
    {
      tabla: 'facultad', url: this.API_URL + 'facultad', tipo: 2, col_Int: [
        {
          tablasHermanas: ['universidad'],
          condiciones: ['universidad.id = facultad.universidad'],
          mostrar: ['facultad.id', 'facultad.nombre', 'facultad.tipo', 'fecha_fun', 'universidad.nombre']
        }
      ]
    },
    {
      tabla: 'programa', url: this.API_URL + 'programa', tipo: 2, col_Int: [
        {
          tablasHermanas: ['facultad'],
          condiciones: ['facultad.id = programa.facultad'],
          mostrar: ['programa.id', 'programa.nombre', 'programa.tipo', 'nivel', 'fecha_creacion', 'fecha_cierre', 'numero_cohortes', 'cant_graduados', 'fecha_actualizacion', 'ciudad', 'facultad.nombre AS facultad']
        }
      ]
    },
    {
      tabla: 'pasantia', url: this.API_URL + 'pasantia', tipo: 2, col_Int: [
        {
          tablasHermanas: ['programa'],
          condiciones: ['programa.id = pasantia.programa'],
          mostrar: ['pasantia.id', 'pasantia.nombre', 'pais', 'empresa', 'descripcion', 'programa.nombre']
        }
      ]
    },
    {
      tabla: 'programa_ac', url: this.API_URL + 'programa_ac', tipo: 2, col_Int: [
        {
          tablasHermanas: ['programa', 'area_conocimiento'],
          condiciones: ['programa.id = programa_ac.programa', 'area_conocimiento.id = programa_ac.area_conocimiento'],
          mostrar: ['programa.nombre as programa', 'area_conocimiento.gran_area as area_de_conocimiento']
        }
      ]
    }
  ];

  public menuOut = [

    { titulo: 'Home', url: 'home' }
    
  ];

  public menuin = [

    { titulo: 'Tablas', url: 'tablas' }
    
  ];
    
}
