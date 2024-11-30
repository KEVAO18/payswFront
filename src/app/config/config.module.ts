import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface usuario {
  documento: number;
  nombreUsuario: string;
  nombre: string;
  email: string;
  idRol: number;
}

export interface tabla{
  tabla: string; 
  url: string; 
  tipo: number; 
  col_Int: any[];
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
    
    // tablas con fk
    
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
      tabla: 'pasantia', url: this.API_URL + 'pasantia', tipo: 2, col_Int: [
        {
          tablasHermanas: ['programa'],
          condiciones: ['programa.id = pasantia.programa'],
          mostrar: ['pasantia.id', 'pasantia.nombre', 'pais', 'empresa', 'descripcion', 'programa.nombre']
        }
      ]
    },

    // tablas intermedias
    {
      tabla: 'credenciales', url: this.API_URL + 'credenciales', tipo: 3, col_Int: [
        {
          tablasHermanas: ['usuarios', 'tiposCredenciales'],
          condiciones: ['usuarios.id = credenciales.usuarios', 'tiposCredenciales.id = credenciales.tiposCredenciales'],
          mostrar: [
            'usuarios.usuario AS usuario',
            'tiposCredenciales.tipo AS Rol'
          ]
        }
      ]
    },
    {
      tabla: 'programa_ci', url: this.API_URL + 'programa_ci', tipo: 3, col_Int: [
        {
          tablasHermanas: ['programa', 'car_innovacion'],
          condiciones: ['programa.id = programa_ci.programa', 'car_innovacion.id = programa_ci.car_innovacion'],
          mostrar: ['programa.nombre AS Programa', 'car_innovacion.nombre AS Car_innovacion']
        }
      ]
    },
    {
      tabla: 'programa_ac', url: this.API_URL + 'programa_ac', tipo: 3, col_Int: [
        {
          tablasHermanas: ['programa', 'area_conocimiento'],
          condiciones: ['programa.id = programa_ac.programa', 'area_conocimiento.id = programa_ac.area_conocimiento'],
          mostrar: ['programa.nombre as programa', 'area_conocimiento.gran_area as area_de_conocimiento']
        }
      ]
    },
    {
      tabla: 'an_programa', url: this.API_URL + 'an_programa', tipo: 3, col_Int: [
        {
          tablasHermanas: ['aspecto_normativo', 'programa'],
          condiciones: ['aspecto_normativo.id = an_programa.aspecto_normativo','programa.id = an_programa.programa'],
          mostrar: ['aspecto_normativo.descripcion as aspecto_normativo', 'programa.nombre as programa']
        }
      ]
    },
    {
      tabla: 'programa_pe', url: this.API_URL + 'programa_pe', tipo: 3, col_Int: [
        {
          tablasHermanas: ['programa', 'practica_estrategia'],
          condiciones: ['programa.id = programa_pe.programa', 'practica_estrategia.id = programa_pe.practica_estrategia'],
          mostrar: ['programa.nombre as programa', 'practica_estrategia.nombre as practica_estrategia']
        }
      ]
    },
    {
      tabla: 'aa_rc', url: this.API_URL + 'aa_rc', tipo: 3, col_Int: [
        {
          tablasHermanas: ['registro_calificado', 'activ_academica', 'programa'],
          condiciones: ['registro_calificado.codigo = aa_rc.registro_calificado_codigo', 'activ_academica.id = aa_rc.activ_academicas_idcurso', 'programa.id = registro_calificado.programa'],
          mostrar: ['activ_academica.nombre AS Actividad', 'programa.nombre AS Programa', 'aa_rc.componente AS Componente', 'aa_rc.semestre AS Semestre']
        }
      ]
    },
    {
      tabla: 'enfoque_rc', url: this.API_URL + 'enfoque_rc', tipo: 3, col_Int: [
        {
          tablasHermanas: ['enfoque', 'registro_calificado', 'programa'],
          condiciones: ['enfoque.id = enfoque_rc.enfoque', 'registro_calificado.codigo = enfoque_rc.registro_calificado', 'programa.id = registro_calificado.programa'],
          mostrar: ['enfoque.nombre AS Enfoque', 'programa.nombre AS Programa', 'registro_calificado.cant_creditos AS Cantidad_de_creditos']
        }
      ]
    },


    // tablas solo admin
    { tabla: 'usuarios', url: this.API_URL + 'usuarios', tipo: 4, col_Int: [
      { 
        mostrar: [ 
          'documento', 
          'nombre', 
          'usuario', 
          'email'
        ]
      } 
    ] },

    // todas las tablas
    { tabla: 'all', url: this.API_URL + 'universidad/Fulljoin?', tipo: 5, col_Int: [
      { 
        tablasHermanas: [
          'facultad',
          'programa',
          'docente_departamento',
          'docente',
          'estudios_realizados',
          'alianza',
          'aliado',
          'proyecto',
          'producto',
          'tipo_producto',
          'palabras_clave',
          'termino_clave',
          'aa_proyecto',
          'area_aplicacion',
          'ods_proyecto',
          'objetivo_desarrollo_sostenible',
          'ac_proyecto',
          'area_conocimiento',
          'linea_investigacion',
          'grupo_investigacion',
          'semillero',
          'desarrolla',
          'reconocimiento',
          'red_docente',
          'red'
        ],
        condiciones: [
          'universidad.id = facultad.universidad',
          'facultad.id = programa.facultad',
          'programa.id = docente_departamento.departamento',
          'docente_departamento.docente = docente.cedula',
          'docente.cedula = estudios_realizados.docente',
          'programa.id = alianza.departamento',
          'alianza.aliado = aliado.nit',
          'programa.id = proyecto.id',
          'producto.proyecto = proyecto.id',
          'producto.tipo_producto = tipo_producto.id',
          'proyecto.id = palabras_clave.proyecto',
          'palabras_clave.termino_clave = termino_clave.termino',
          'proyecto.id = aa_proyecto.proyecto',
          'aa_proyecto.area_aplicacion = area_aplicacion.id',
          'proyecto.id = ods_proyecto.proyecto',
          'ods_proyecto.ods = objetivo_desarrollo_sostenible.id',
          'proyecto.id = ac_proyecto.proyecto',
          'ac_proyecto.area_conocimiento = area_conocimiento.id',
          'docente.linea_investigacion_principal = linea_investigacion.id',
          'universidad.id = grupo_investigacion.universidad',
          'grupo_investigacion.id = semillero.grupo_investigacion',
          'docente.cedula = desarrolla.docente AND proyecto.id = desarrolla.proyecto',
          'docente.cedula = reconocimiento.docente',
          'docente.cedula = red_docente.docente',
          'red_docente.red = red.idr'
        ],
        mostrar: ['*']
      }
    ] }

  ];

  public fkParaFormularios = [

    // tablas con fk
    { tabla: 'programa', fk: 'facultad', url: this.API_URL + 'facultad', columna: 'nombre' },
    { tabla: 'docente_departamento', fk: 'docente', url: this.API_URL + 'docente', columna: 'nombres' },
    { tabla: 'docente_departamento', fk: 'departamento', url: this.API_URL + 'programa', columna: 'nombre' },
    { tabla: 'alianza', fk: 'docente', url: this.API_URL + 'docente', columna: 'nombres' },
    { tabla: 'alianza', fk: 'departamento', url: this.API_URL + 'programa', columna: 'nombre' },
    { tabla: 'alianza', fk: 'aliado', url: this.API_URL + 'aliado', columna: 'razon_social' },
    { tabla: 'premio', fk: 'programa', url: this.API_URL + 'programa', columna: 'nombre' },
    { tabla: 'activ_academica', fk: 'disenio', url: this.API_URL + 'programa', columna: 'nombre' },
    { tabla: 'registro_calificado', fk: 'programa', url: this.API_URL + 'programa', columna: 'nombre' },
    { tabla: 'acreditacion', fk: 'programa', url: this.API_URL + 'programa', columna: 'nombre' },
    { tabla: 'facultad', fk: 'universidad', url: this.API_URL + 'universidad', columna: 'nombre' },
    { tabla: 'pasantia', fk: 'programa', url: this.API_URL + 'programa', columna: 'nombre' },

    // tablas intermedias
    { tabla: 'credenciales', fk: 'usuarios', url: this.API_URL + 'usuarios' },
    { tabla: 'credenciales', fk: 'tiposCredenciales', url: this.API_URL + 'tiposcredenciales' },
    { tabla: 'programa_ci', fk: 'programa', url: this.API_URL + 'programa' },
    { tabla: 'programa_ci', fk: 'car_innovacion', url: this.API_URL + 'car_innovacion' },
    { tabla: 'programa_ac', fk: 'programa', url: this.API_URL + 'programa' },
    { tabla: 'programa_ac', fk: 'area_conocimiento', url: this.API_URL + 'area_conocimiento' },
    { tabla: 'an_programa', fk: 'aspecto_normativo', url: this.API_URL + 'aspecto_normativo' },
    { tabla: 'an_programa', fk: 'programa', url: this.API_URL + 'programa' },
    { tabla: 'programa_pe', fk: 'programa', url: this.API_URL + 'programa' },
    { tabla: 'programa_pe', fk: 'practica_estrategia', url: this.API_URL + 'practica_estrategia' },
    { tabla: 'aa_rc', fk: 'registro_calificado', url: this.API_URL + 'registro_calificado' },
    { tabla: 'aa_rc', fk: 'activ_academicas_idcurso', url: this.API_URL + 'activ_academica' },
    { tabla: 'aa_rc', fk: 'programa', url: this.API_URL + 'programa' },
    { tabla: 'enfoque_rc', fk: 'enfoque', url: this.API_URL + 'enfoque' },
    { tabla: 'enfoque_rc', fk: 'registro_calificado', url: this.API_URL + 'registro_calificado' },
    { tabla: 'enfoque_rc', fk: 'programa', url: this.API_URL + 'programa' }
  ];

  public filtros = [
    { nombre: 'Sin fk', valor: 1 },
    { nombre: 'Con fk', valor: 2 },
    { nombre: 'Intermedias', valor: 3 }
  ];

  public menuOut = [

    { titulo: 'Home', url: 'home' }
    
  ];

  public menuin = [

    { titulo: 'Tablas', url: 'tablas' }
    
  ];
    
}
