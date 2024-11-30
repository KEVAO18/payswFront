# Paysw2

Proyecto Angular para Aplicaciones y servicios Web

- [creacion de las tablas](#creacion-de-las-tablas)

- [credencial administrador](#credencial-administrador)

- [credencial de usuario comun](#credencial-de-usuario-comun)

- [insercion de datos](#insercion-de-datos)

- [trigger auto asignacion de credenciales tipo 2](#trigger-auto-asignacion-de-credenciales-tipo-2)

- [Backend](https://github.com/KEVAO18/payswBack)

## base de datos

### creacion de las tablas

```sql
create database Modelo2;
Go

use Modelo2;
Go

-- tablas de manejo de credenciales y usuarios

create table usuarios(
 documento int not null,
 nombre NVARCHAR(75) not null,
 usuario NVARCHAR(30) not null,
 Contrasena NVARCHAR(100) not null,
 email NVARCHAR(75) not null

 constraint pk_user
 primary key(documento)
);
Go

create table tiposCredenciales(
 id int not null,
 tipo NVARCHAR(100) not null,
 
 constraint pk_tipoCred
 primary key(id)
);
Go

create table credenciales(
 usuarios int,
 tiposCredenciales int,

 constraint fk_tipoCred_cred
 foreign key(tiposCredenciales)
 references tiposCredenciales(id)
 ON DELETE CASCADE
 ON UPDATE NO ACTION,

 constraint fk_usuario_cred
 foreign key(usuarios)
 references usuarios(documento)
 ON DELETE CASCADE
 ON UPDATE NO ACTION
);
Go

-- SQL Server Script generado por conversión manual
-- Tabla universidad

CREATE TABLE universidad (
  id INT NOT NULL PRIMARY KEY,
  nombre NVARCHAR(60) NOT NULL,
  tipo NVARCHAR(45) NOT NULL,
  ciudad NVARCHAR(45) NOT NULL
);
GO

-- Tabla facultad
CREATE TABLE facultad (
  id INT NOT NULL PRIMARY KEY,
  nombre NVARCHAR(60) NOT NULL,
  tipo NVARCHAR(45) NOT NULL,
  fecha_fun DATE NOT NULL,
  universidad INT NOT NULL,
  CONSTRAINT fk_unidad_sede FOREIGN KEY (universidad)
    REFERENCES universidad (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla programa
CREATE TABLE programa (
  id INT NOT NULL PRIMARY KEY,
  nombre NVARCHAR(60) NOT NULL,
  tipo NVARCHAR(45) NOT NULL,
  nivel NVARCHAR(45) NOT NULL,
  fecha_creacion NVARCHAR(45) NOT NULL,
  fecha_cierre NVARCHAR(45) NULL,
  numero_cohortes NVARCHAR(45) NOT NULL,
  cant_graduados NVARCHAR(45) NOT NULL,
  fecha_actualizacion NVARCHAR(45) NOT NULL,
  ciudad NVARCHAR(45) NOT NULL,
  facultad INT NOT NULL,
  CONSTRAINT fk_programa_facultad FOREIGN KEY (facultad)
    REFERENCES facultad (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla linea_investigacion
CREATE TABLE linea_investigacion (
  id INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
  nombre NVARCHAR(45) NOT NULL,
  descripcion NVARCHAR(256) NOT NULL
);
GO

-- Tabla docente
CREATE TABLE docente (
  cedula INT NOT NULL PRIMARY KEY,
  nombres NVARCHAR(60) NOT NULL,
  apellidos NVARCHAR(60) NOT NULL,
  genero NVARCHAR(12) NOT NULL,
  cargo NVARCHAR(30) NOT NULL,
  fecha_nacimiento DATE NOT NULL,
  correo NVARCHAR(70) NOT NULL,
  telefono NVARCHAR(20) NOT NULL,
  url_cvlac NVARCHAR(128) NOT NULL,
  fecha_actualizacion DATE NOT NULL,
  escalafon NVARCHAR(45) NOT NULL,
  perfil NVARCHAR(MAX) NOT NULL,
  cat_minciencia NVARCHAR(45) NULL,
  conv_minciencia NVARCHAR(45) NOT NULL,
  nacionalidaad NVARCHAR(45) NOT NULL,
  linea_investigacion_principal INT NULL,
  CONSTRAINT fk_docente_linea_investigacion FOREIGN KEY (linea_investigacion_principal)
    REFERENCES linea_investigacion (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla estudios_realizados
CREATE TABLE estudios_realizados (
  id INT NOT NULL PRIMARY KEY,
  titulo NVARCHAR(45) NOT NULL,
  universidad NVARCHAR(50) NOT NULL,
  fecha DATE NOT NULL,
  tipo NVARCHAR(45) NOT NULL,
  ciudad NVARCHAR(45) NOT NULL,
  docente INT NOT NULL,
  ins_acreditada BIT NOT NULL,
  metodologia NVARCHAR(45) NOT NULL,
  perfil_egresado NVARCHAR(MAX) NOT NULL,
  pais NVARCHAR(45) NOT NULL,
  CONSTRAINT fk_estudio_docente FOREIGN KEY (docente)
    REFERENCES docente (cedula)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla aliado
CREATE TABLE aliado (
  nit int NOT NULL PRIMARY KEY,
  razon_social NVARCHAR(60) NOT NULL,
  nombre_contacto NVARCHAR(60) NOT NULL,
  correo NVARCHAR(70) NOT NULL,
  telefono NVARCHAR(45) NOT NULL,
  ciudad NVARCHAR(45) NOT NULL
);
GO

-- Tabla proyecto
CREATE TABLE proyecto (
  id INT NOT NULL PRIMARY KEY,
  titulo NVARCHAR(70) NOT NULL,
  resumen NVARCHAR(256) NOT NULL,
  presupuesto FLOAT NOT NULL,
  tipo_financiacion NVARCHAR(45) NOT NULL,
  tipo_fondos NVARCHAR(45) NOT NULL,
  fecha_inicio DATE NOT NULL,
  fecha_fin DATE NULL
);
GO

-- Tabla tipo_producto
CREATE TABLE tipo_producto (
  id INT NOT NULL PRIMARY KEY,
  categoria NVARCHAR(45) NOT NULL,
  clase NVARCHAR(45) NOT NULL,
  nombre NVARCHAR(45) NOT NULL,
  tipologia NVARCHAR(45) NOT NULL
);
GO

-- Tabla producto
CREATE TABLE producto (
  id INT NOT NULL PRIMARY KEY,
  nombre NVARCHAR(45) NOT NULL,
  categoria NVARCHAR(45) NOT NULL,
  fecha_entrega DATE NOT NULL,
  proyecto INT NULL,
  tipo_producto INT NOT NULL,
  CONSTRAINT fk_producto_proyecto FOREIGN KEY (proyecto)
    REFERENCES proyecto (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_producto_tipo_producto FOREIGN KEY (tipo_producto)
    REFERENCES tipo_producto (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla termino_clave
CREATE TABLE termino_clave (
  termino NVARCHAR(30) NOT NULL PRIMARY KEY,
  termino_ingles NVARCHAR(30) NULL
);
GO

-- Tabla area_aplicacion
CREATE TABLE area_aplicacion (
  id INT NOT NULL PRIMARY KEY,
  nombre NVARCHAR(60) NOT NULL
);
GO

-- Tabla objetivo_desarrollo_sostenible
CREATE TABLE objetivo_desarrollo_sostenible (
  id INT NOT NULL PRIMARY KEY,
  nombre NVARCHAR(60) NOT NULL,
  categoria NVARCHAR(45) NOT NULL
);
GO

-- Tabla area_conocimiento
CREATE TABLE area_conocimiento (
  id INT NOT NULL PRIMARY KEY,
  gran_area NVARCHAR(60) NOT NULL,
  area NVARCHAR(60) NOT NULL,
  disciplina NVARCHAR(60) NOT NULL
);
GO

-- Tabla grupo_investigacion
CREATE TABLE grupo_investigacion (
  id INT NOT NULL PRIMARY KEY,
  nombre NVARCHAR(60) NOT NULL,
  url_gruplac NVARCHAR(128) NULL,
  categoria NVARCHAR(10) NULL,
  convocatoria NVARCHAR(10) NULL,
  fecha_fundacion DATE NOT NULL,
  universidad INT NULL,
  interno BIT NOT NULL,
  ambito NVARCHAR(45) NOT NULL,
  CONSTRAINT fk_grupo_investigacion_sede FOREIGN KEY (universidad)
    REFERENCES universidad (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla semillero
CREATE TABLE semillero (
  id INT NOT NULL PRIMARY KEY,
  nombre NVARCHAR(60) NOT NULL,
  fecha_fundacion DATE NOT NULL,
  grupo_investigacion INT NOT NULL,
  CONSTRAINT fk_semillero_grupo_investigacion FOREIGN KEY (grupo_investigacion)
    REFERENCES grupo_investigacion (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla semillero_linea
CREATE TABLE semillero_linea (
  semillero INT NOT NULL,
  linea_investigacion INT NOT NULL,
  PRIMARY KEY (semillero, linea_investigacion),
  CONSTRAINT fk_semillero_linea_semillero FOREIGN KEY (semillero)
    REFERENCES semillero (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_semillero_linea_linea FOREIGN KEY (linea_investigacion)
    REFERENCES linea_investigacion (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla grupo_linea
CREATE TABLE grupo_linea (
  grupo_investigacion INT NOT NULL,
  linea_investigacion INT NOT NULL,
  PRIMARY KEY (grupo_investigacion, linea_investigacion),
  CONSTRAINT fk_grupo_linea_grupo FOREIGN KEY (grupo_investigacion)
    REFERENCES grupo_investigacion (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_grupo_linea_linea FOREIGN KEY (linea_investigacion)
    REFERENCES linea_investigacion (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla docente_departamento
CREATE TABLE docente_departamento (
  docente INT NOT NULL,
  departamento INT NOT NULL,
  dedicacion NVARCHAR(15) NOT NULL,
  modalidad NVARCHAR(45) NOT NULL,
  fecha_ingreso DATE NOT NULL,
  fecha_salida DATE NULL,
  PRIMARY KEY (docente, departamento),
  CONSTRAINT fk_docente_departamento_docente FOREIGN KEY (docente)
    REFERENCES docente (cedula)
    ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_docente_departamento_departamento FOREIGN KEY (departamento)
    REFERENCES programa (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla participa_semillero
CREATE TABLE participa_semillero (
  docente INT NOT NULL,
  semillero INT NOT NULL,
  rol NVARCHAR(15) NOT NULL,
  fecha_inicio DATE NOT NULL,
  fecha_fin DATE NULL,
  PRIMARY KEY (docente, semillero),
  CONSTRAINT fk_participa_semillero_docente FOREIGN KEY (docente)
    REFERENCES docente (cedula)
    ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_participa_semillero_semillero FOREIGN KEY (semillero)
    REFERENCES semillero (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla participa_grupo
CREATE TABLE participa_grupo (
  docente_cedula INT NOT NULL,
  grupo_investigacion_id INT NOT NULL,
  rol NVARCHAR(15) NOT NULL,
  fecha_inicio DATE NOT NULL,
  fecha_fin DATE NULL,
  PRIMARY KEY (docente_cedula, grupo_investigacion_id),
  CONSTRAINT fk_participa_grupo_docente FOREIGN KEY (docente_cedula)
    REFERENCES docente (cedula)
    ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_participa_grupo_grupo FOREIGN KEY (grupo_investigacion_id)
    REFERENCES grupo_investigacion (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla alianza
CREATE TABLE alianza (
  aliado INT NOT NULL,
  departamento INT NOT NULL,
  fecha_inicio DATE NOT NULL,
  fecha_fin DATE NULL,
  docente INT NULL,
  PRIMARY KEY (aliado, departamento),
  CONSTRAINT fk_alianza_aliado FOREIGN KEY (aliado)
    REFERENCES aliado (nit)
    ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_alianza_departamento FOREIGN KEY (departamento)
    REFERENCES programa (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_alianza_docente FOREIGN KEY (docente)
    REFERENCES docente (cedula)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla aliado_proyecto
CREATE TABLE aliado_proyecto (
  aliado INT NOT NULL,
  proyecto INT NOT NULL,
  PRIMARY KEY (aliado, proyecto),
  CONSTRAINT fk_aliado_proyecto_aliado FOREIGN KEY (aliado)
    REFERENCES aliado (nit)
    ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_aliado_proyecto_proyecto FOREIGN KEY (proyecto)
    REFERENCES proyecto (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla desarrolla
CREATE TABLE desarrolla (
  docente INT NOT NULL,
  proyecto INT NOT NULL,
  rol NVARCHAR(45) NOT NULL,
  descripcion NVARCHAR(256) NOT NULL,
  PRIMARY KEY (docente, proyecto),
  CONSTRAINT fk_desarrolla_docente FOREIGN KEY (docente)
    REFERENCES docente (cedula)
    ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_desarrolla_proyecto FOREIGN KEY (proyecto)
    REFERENCES proyecto (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla palabras_clave
CREATE TABLE palabras_clave (
  proyecto INT NOT NULL,
  termino_clave NVARCHAR(30) NOT NULL,
  PRIMARY KEY (proyecto, termino_clave),
  CONSTRAINT fk_palabras_clave_proyecto FOREIGN KEY (proyecto)
    REFERENCES proyecto (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_palabras_clave_termino_clave FOREIGN KEY (termino_clave)
    REFERENCES termino_clave (termino)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla ac_proyecto
CREATE TABLE ac_proyecto (
  proyecto INT NOT NULL,
  area_conocimiento INT NOT NULL,
  PRIMARY KEY (proyecto, area_conocimiento),
  CONSTRAINT fk_ac_proyecto_proyecto FOREIGN KEY (proyecto)
    REFERENCES proyecto (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_ac_proyecto_area_conocimiento FOREIGN KEY (area_conocimiento)
    REFERENCES area_conocimiento (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla proyecto_linea
CREATE TABLE proyecto_linea (
  proyecto INT NOT NULL,
  linea_investigacion INT NOT NULL,
  PRIMARY KEY (proyecto, linea_investigacion),
  CONSTRAINT fk_proyecto_linea_proyecto FOREIGN KEY (proyecto)
    REFERENCES proyecto (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_proyecto_linea_linea_investigacion FOREIGN KEY (linea_investigacion)
    REFERENCES linea_investigacion (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla ods_proyecto
CREATE TABLE ods_proyecto (
  proyecto INT NOT NULL,
  ods INT NOT NULL,
  PRIMARY KEY (proyecto, ods),
  CONSTRAINT fk_ods_proyecto_proyecto FOREIGN KEY (proyecto)
    REFERENCES proyecto (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_ods_proyecto_ods FOREIGN KEY (ods)
    REFERENCES objetivo_desarrollo_sostenible (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla aa_proyecto
CREATE TABLE aa_proyecto (
  proyecto INT NOT NULL,
  area_aplicacion INT NOT NULL,
  PRIMARY KEY (proyecto, area_aplicacion),
  CONSTRAINT fk_aa_proyecto_proyecto FOREIGN KEY (proyecto)
    REFERENCES proyecto (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_aa_proyecto_area_aplicacion FOREIGN KEY (area_aplicacion)
    REFERENCES area_aplicacion (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla ac_linea
CREATE TABLE ac_linea (
  linea_investigacion INT NOT NULL,
  area_conocimiento INT NOT NULL,
  PRIMARY KEY (linea_investigacion, area_conocimiento),
  CONSTRAINT fk_ac_linea_linea_investigacion FOREIGN KEY (linea_investigacion)
    REFERENCES linea_investigacion (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_ac_linea_area_conocimie FOREIGN KEY (area_conocimiento)
    REFERENCES area_conocimiento (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla ods_linea
CREATE TABLE ods_linea (
  linea_investigacion INT NOT NULL,
  ods INT NOT NULL,
  PRIMARY KEY (linea_investigacion, ods),
  CONSTRAINT fk_ods_linea_linea FOREIGN KEY (linea_investigacion)
    REFERENCES linea_investigacion (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_ods_linea_ods FOREIGN KEY (ods)
    REFERENCES objetivo_desarrollo_sostenible (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla aa_linea
CREATE TABLE aa_linea (
  area_aplicacion INT NOT NULL,
  linea_investigacion INT NOT NULL,
  PRIMARY KEY (area_aplicacion, linea_investigacion),
  CONSTRAINT fk_aa_linea_area_aplicacion FOREIGN KEY (area_aplicacion)
    REFERENCES area_aplicacion (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_aa_linea_linea_investigacion FOREIGN KEY (linea_investigacion)
    REFERENCES linea_investigacion (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla docente_producto
CREATE TABLE docente_producto (
  docente INT NOT NULL,
  producto INT NOT NULL,
  PRIMARY KEY (docente, producto),
  CONSTRAINT fk_docente_producto_docente FOREIGN KEY (docente)
    REFERENCES docente (cedula)
    ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_docente_producto_producto FOREIGN KEY (producto)
    REFERENCES producto (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla estudio_ac
CREATE TABLE estudio_ac (
  estudio INT NOT NULL,
  area_conocimiento INT NOT NULL,
  PRIMARY KEY (estudio, area_conocimiento),
  CONSTRAINT fk_estudio_ac_estudio FOREIGN KEY (estudio)
    REFERENCES estudios_realizados (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_estudio_ac_area_conocimiento FOREIGN KEY (area_conocimiento)
    REFERENCES area_conocimiento (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla apoyo_profesoral
CREATE TABLE apoyo_profesoral (
  estudios INT NOT NULL,
  con_apoyo BIT NOT NULL,
  institucion NVARCHAR(45) NOT NULL,
  tipo NVARCHAR(45) NOT NULL,
  PRIMARY KEY (estudios),
  CONSTRAINT fk_apoyo_profesoral_estudios1 FOREIGN KEY (estudios)
    REFERENCES estudios_realizados (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla beca
CREATE TABLE beca (
  estudios INT NOT NULL,
  tipo NVARCHAR(45) NOT NULL,
  institucion NVARCHAR(80) NOT NULL,
  fecha_inicio DATE NOT NULL,
  fecha_fin DATE NULL,
  PRIMARY KEY (estudios),
  CONSTRAINT fk_beca_estudios1 FOREIGN KEY (estudios)
    REFERENCES estudios_realizados (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla evaluacion_docente
CREATE TABLE evaluacion_docente (
  id INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
  calificacion FLOAT NOT NULL,
  semestre NVARCHAR(45) NOT NULL,
  docente INT NOT NULL,
  CONSTRAINT fk_evaluacion_docente_docente FOREIGN KEY (docente)
    REFERENCES docente (cedula)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla reconocimiento
CREATE TABLE reconocimiento (
  id INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
  tipo NVARCHAR(45) NOT NULL,
  fecha DATE NOT NULL,
  institucion NVARCHAR(45) NOT NULL,
  nombre NVARCHAR(45) NOT NULL,
  ambito NVARCHAR(45) NOT NULL,
  docente INT NOT NULL,
  CONSTRAINT fk_reconocimiento_docente FOREIGN KEY (docente)
    REFERENCES docente (cedula)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla red
CREATE TABLE red (
  idr INT NOT NULL PRIMARY KEY,
  nombre NVARCHAR(45) NOT NULL,
  url NVARCHAR(45) NOT NULL,
  pais NVARCHAR(45) NOT NULL
);
GO

-- Tabla red_docente
CREATE TABLE red_docente (
  red INT NOT NULL,
  docente INT NOT NULL,
  fecha_inicio DATE NOT NULL,
  fecha_fin NVARCHAR(45) NULL,
  act_destacadas NVARCHAR(MAX) NOT NULL,
  PRIMARY KEY (red, docente),
  CONSTRAINT fk_red_docente_redes FOREIGN KEY (red)
    REFERENCES red (idr)
    ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_red_docente_docente FOREIGN KEY (docente)
    REFERENCES docente (cedula)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla experiencia
CREATE TABLE experiencia (
  id INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
  nombre_cargo NVARCHAR(45) NOT NULL,
  institucion NVARCHAR(45) NOT NULL,
  tipo NVARCHAR(45) NOT NULL,
  fecha_inicio DATE NOT NULL,
  fecha_fin DATE NULL,
  docente INT NOT NULL,
  CONSTRAINT fk_experiencia_docente FOREIGN KEY (docente)
    REFERENCES docente (cedula)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla programa_ac
CREATE TABLE programa_ac (
  programa INT NOT NULL,
  area_conocimiento INT NOT NULL,
  PRIMARY KEY (programa, area_conocimiento),
  CONSTRAINT fk_programa_ac_programa FOREIGN KEY (programa)
    REFERENCES programa (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_programa_ac_area_conocimiento FOREIGN KEY (area_conocimiento)
    REFERENCES area_conocimiento (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla acreditacion
CREATE TABLE acreditacion (
  resolucion INT NOT NULL PRIMARY KEY,
  tipo NVARCHAR(45) NOT NULL,
  calificacion NVARCHAR(45) NOT NULL,
  fecha_inicio NVARCHAR(45) NOT NULL,
  fecha_fin NVARCHAR(45) NOT NULL,
  programa INT NOT NULL,
  CONSTRAINT fk_acreditacion_programa FOREIGN KEY (programa)
    REFERENCES programa (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla registro_calificado
CREATE TABLE registro_calificado (
  codigo INT NOT NULL PRIMARY KEY,
  cant_creditos NVARCHAR(45) NOT NULL,
  hora_acom NVARCHAR(45) NOT NULL,
  hora_ind NVARCHAR(45) NOT NULL,
  metodologia NVARCHAR(45) NOT NULL,
  fecha_inicio DATE NOT NULL,
  fecha_fin DATE NOT NULL,
  duracion_anios NVARCHAR(45) NOT NULL,
  duracion_semestres NVARCHAR(45) NOT NULL,
  tipo_titulacion NVARCHAR(45) NOT NULL,
  programa INT NOT NULL,
  CONSTRAINT fk_registro_calificado_programa FOREIGN KEY (programa)
    REFERENCES programa (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla activ_academica
CREATE TABLE activ_academica (
  id INT NOT NULL PRIMARY KEY,
  nombre NVARCHAR(45) NOT NULL,
  num_creditos INT NOT NULL,
  tipo NVARCHAR(20) NOT NULL,
  area_formacion NVARCHAR(45) NOT NULL,
  h_acom INT NOT NULL,
  h_indep INT NOT NULL,
  idioma NVARCHAR(45) NOT NULL,
  espejo BIT NOT NULL,
  entidad_espejo NVARCHAR(45) NOT NULL,
  pais_espejo NVARCHAR(45) NOT NULL,
  disenio INT NULL,
  CONSTRAINT fk_activ_academicas_programa FOREIGN KEY (disenio)
    REFERENCES programa (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla enfoque
CREATE TABLE enfoque (
  id INT NOT NULL PRIMARY KEY,
  nombre NVARCHAR(75) NOT NULL,
  descripcion NVARCHAR(150) NOT NULL
);

GO

-- Tabla enfoque_rc
CREATE TABLE enfoque_rc (
  enfoque INT NOT NULL,
  registro_calificado INT NOT NULL,
  PRIMARY KEY (enfoque, registro_calificado),
  CONSTRAINT fk_enfoque_rc_enfoque FOREIGN KEY (enfoque)
    REFERENCES enfoque (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_enfoque_rc_registro_calificado FOREIGN KEY (registro_calificado)
    REFERENCES registro_calificado (codigo)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla aspecto_normativo
CREATE TABLE aspecto_normativo (
  id INT NOT NULL PRIMARY KEY,
  tipo NVARCHAR(45) NOT NULL,
  descripcion NVARCHAR(45) NOT NULL,
  fuente NVARCHAR(45) NOT NULL
);
GO

-- Tabla an_programa
CREATE TABLE an_programa (
  aspecto_normativo INT NOT NULL,
  programa INT NOT NULL,
  PRIMARY KEY (aspecto_normativo, programa),
  CONSTRAINT fk_an_programa_aspecto_normativo FOREIGN KEY (aspecto_normativo)
    REFERENCES aspecto_normativo (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_an_programa_programa FOREIGN KEY (programa)
    REFERENCES programa (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla practica_estrategia
CREATE TABLE practica_estrategia (
  id INT NOT NULL PRIMARY KEY,
  tipo NVARCHAR(45) NOT NULL,
  nombre NVARCHAR(45) NOT NULL,
  descripcion NVARCHAR(45) NOT NULL
);
GO

-- Tabla programa_pe
CREATE TABLE programa_pe (
  programa INT NOT NULL,
  practica_estrategia INT NOT NULL,
  PRIMARY KEY (programa, practica_estrategia),
  CONSTRAINT fk_programa_pe_programa FOREIGN KEY (programa)
    REFERENCES programa (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_programa_pe_practica_estrategia FOREIGN KEY (practica_estrategia)
    REFERENCES practica_estrategia (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla aa_rc
CREATE TABLE aa_rc (
  activ_academicas_idcurso INT NOT NULL,
  registro_calificado_codigo INT NOT NULL,
  componente NVARCHAR(45) NOT NULL,
  semestre NVARCHAR(45) NOT NULL,
  PRIMARY KEY (activ_academicas_idcurso, registro_calificado_codigo),
  CONSTRAINT fk_aa_rc_activ_academica FOREIGN KEY (activ_academicas_idcurso)
    REFERENCES activ_academica (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_aa_rc_registro_calificado FOREIGN KEY (registro_calificado_codigo)
    REFERENCES registro_calificado (codigo)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla pasantia
CREATE TABLE pasantia (
  id INT NOT NULL PRIMARY KEY,
  nombre NVARCHAR(45) NOT NULL,
  pais NVARCHAR(45) NOT NULL,
  empresa NVARCHAR(45) NOT NULL,
  descripcion NVARCHAR(45) NOT NULL,
  programa INT NOT NULL,
  CONSTRAINT fk_pasantia_programa FOREIGN KEY (programa)
    REFERENCES programa (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla premio
CREATE TABLE premio (
  id INT NOT NULL PRIMARY KEY,
  nombre NVARCHAR(45) NOT NULL,
  descripcion NVARCHAR(75) NOT NULL,
  fecha DATE NOT NULL,
  entidad_otorgante NVARCHAR(45) NOT NULL,
  pais NVARCHAR(45) NOT NULL,
  programa INT NOT NULL,
  CONSTRAINT fk_premio_programa FOREIGN KEY (programa)
    REFERENCES programa (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla car_innovacion
CREATE TABLE car_innovacion (
  id INT NOT NULL PRIMARY KEY,
  nombre NVARCHAR(45) NOT NULL,
  descripcion NVARCHAR(MAX) NOT NULL,
  tipo NVARCHAR(45) NOT NULL
);
GO

-- Tabla programa_ci
CREATE TABLE programa_ci (
  programa INT NOT NULL,
  car_innovacion INT NOT NULL,
  PRIMARY KEY (programa, car_innovacion),
  CONSTRAINT fk_programa_ci_programa FOREIGN KEY (programa)
    REFERENCES programa (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_programa_ci_car_innovacion FOREIGN KEY (car_innovacion)
    REFERENCES car_innovacion (id)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO

-- Tabla intereses_futuros
CREATE TABLE intereses_futuros (
  docente INT NOT NULL,
  termino_clave NVARCHAR(30) NOT NULL,
  PRIMARY KEY (docente, termino_clave),
  CONSTRAINT fk_intereses_futuros_termino_clave FOREIGN KEY (docente)
    REFERENCES docente (cedula)
    ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT fk_intereses_futuros_docente FOREIGN KEY (termino_clave)
    REFERENCES termino_clave (termino)
    ON DELETE NO ACTION ON UPDATE NO ACTION
);
GO
```

### credencial administrador

```json
{
    "documento": 1001228811,
    "nombre": "kevin orrego",
    "usuario": "kevin",
    "Contrasena": "$2a$11$v9CsWc6fg3ZsN4f1vvxlxeYT4/.SI/b6kAKurUXINaY8CxeTKQJaq",
    "email": "ejemplo3@prueba.com"
}
```

### credencial de usuario comun

```json
{
    "documento": 111111,
    "nombre": "juan perez",
    "usuario": "jperez",
    "Contrasena": "$2a$11$8UKpdVBGnUHa5tnSTt1MHOcbb9Y2EA0JM9xwUqpSHWFvHhHTRBf.i",
    "email": "ejemplo@prueba.com"
}
```

### insercion de datos

```sql
use Modelo2;

-- Insertar datos en la tabla tiposCredenciales
insert into tiposCredenciales(id, tipo) values
(1, 'Administrador'),
(2, 'Usuario');

-- Insertar datos en la tabla 
insert into credenciales(usuarios, tiposCredenciales) values
(1001228811, 1),
(111111, 2);

-- Insertar datos en la tabla universidad
INSERT INTO universidad (id, nombre, tipo, ciudad) 
VALUES 
(1, 'Universidad Nacional', 'Pública', 'Bogotá'),
(2, 'Universidad de Antioquia', 'Pública', 'Medellín'),
(3, 'Universidad EAFIT', 'Privada', 'Medellín'),
(4, 'Instituto Tecnológico Metropolitano - ITM', 'Pública', 'Medellín'),
(5, 'Universidad de San Buenaventura', 'Privada', 'Medellín');

-- Insertar datos en la tabla facultad
INSERT INTO facultad (id, nombre, tipo, fecha_fun, universidad) 
VALUES 
(1, 'Facultad de Ingeniería', 'Académica', '1975-06-10', 1),
(2, 'Facultad de Ciencias', 'Académica', '1980-04-15', 2),
(3, 'Facultad de Administración', 'Académica', '1985-09-12', 3),
(4, 'Facultad de Tecnologías', 'Académica', '1995-07-20', 4),
(5, 'Facultad de Humanidades y Ciencias', 'Académica', '1970-02-10', 5);

-- Insertar datos en la tabla programa
INSERT INTO programa (id, nombre, tipo, nivel, fecha_creacion, fecha_cierre, numero_cohortes, cant_graduados, fecha_actualizacion, ciudad, facultad) 
VALUES 
(1, 'Ingeniería de Sistemas', 'Pregrado', 'Profesional', '2000-01-15', NULL, '15', '200', '2024-09-20', 'Bogotá', 1),
(2, 'Biología', 'Pregrado', 'Profesional', '1998-05-10', NULL, '20', '300', '2024-09-20', 'Medellín', 2),
(3, 'Administración de Negocios', 'Pregrado', 'Profesional', '1995-09-12', NULL, '25', '400', '2024-09-20', 'Medellín', 3),
(4, 'Tecnología en Electrónica', 'Tecnología', 'Profesional', '2005-03-25', NULL, '10', '150', '2024-09-20', 'Medellín', 4),
(5, 'Psicología', 'Pregrado', 'Profesional', '1990-07-01', NULL, '30', '500', '2024-09-20', 'Medellín', 5);

-- Insertar datos en la tabla linea_investigacion
INSERT INTO linea_investigacion (nombre, descripcion) 
VALUES 
('Inteligencia Artificial', 'Investigación sobre IA y aprendizaje automático'),
('Biotecnología', 'Investigación en biotecnología aplicada'),
('Innovación Empresarial', 'Investigación en estrategias empresariales innovadoras');

-- Insertar datos en la tabla docente
INSERT INTO docente (cedula, nombres, apellidos, genero, cargo, fecha_nacimiento, correo, telefono, url_cvlac, fecha_actualizacion, escalafon, perfil, cat_minciencia, conv_minciencia, nacionalidaad, linea_investigacion_principal) 
VALUES 
(1001, 'Juan', 'Pérez', 'Masculino', 'Profesor Titular', '1970-04-15', 'juan.perez@universidad.edu.co', '3001234567', 'http://cvlac.com/juanperez', '2024-09-20', 'Escalafón A', 'Especialista en IA', 'Investigador Sénior', 'Sí', 'Colombiano', 1),
(1002, 'María', 'Gómez', 'Femenino', 'Profesora Asociada', '1985-07-20', 'maria.gomez@universidad.edu.co', '3007654321', 'http://cvlac.com/mariagomez', '2024-09-20', 'Escalafón B', 'Especialista en Biotecnología', 'Investigador Asistente', 'No', 'Colombiana', 2),
(1003, 'Carlos', 'Rodríguez', 'Masculino', 'Profesor Asistente', '1990-10-10', 'carlos.rodriguez@universidad.edu.co', '3012345678', 'http://cvlac.com/carlosrodriguez', '2024-09-20', 'Escalafón C', 'Especialista en Innovación', 'Investigador Asociado', 'Sí', 'Colombiano', 3);

-- Insertar datos en la tabla estudios_realizados
INSERT INTO estudios_realizados (id, titulo, universidad, fecha, tipo, ciudad, docente, ins_acreditada, metodologia, perfil_egresado, pais) 
VALUES 
(1, 'Maestría en IA', 'Universidad Nacional', '2010-06-20', 'Posgrado', 'Bogotá', 1001, 1, 'Presencial', 'Perfil en IA aplicada', 'Colombia'),
(2, 'Doctorado en Biotecnología', 'Universidad de Antioquia', '2015-11-10', 'Posgrado', 'Medellín', 1002, 1, 'Presencial', 'Perfil en Biotecnología avanzada', 'Colombia'),
(3, 'Especialización en Innovación', 'EAFIT', '2012-09-15', 'Posgrado', 'Medellín', 1003, 1, 'Presencial', 'Perfil en innovación empresarial', 'Colombia');

-- Insertar datos en la tabla aliado
INSERT INTO aliado (nit, razon_social, nombre_contacto, correo, telefono, ciudad) 
VALUES 
(123456789, 'Empresa Innovadora', 'Laura Torres', 'contacto@empresa.com', '3009876543', 'Medellín'),
(987654321, 'Soluciones Tecnológicas', 'Pedro Martínez', 'info@soluciones.com', '3101234567', 'Bogotá');

-- Insertar datos en la tabla proyecto
INSERT INTO proyecto (id, titulo, resumen, presupuesto, tipo_financiacion, tipo_fondos, fecha_inicio, fecha_fin) 
VALUES 
(1, 'Proyecto de IA aplicada', 'Desarrollo de IA para mejorar procesos industriales', 5000000, 'Pública', 'Fondos estatales', '2023-01-01', '2024-12-31'),
(2, 'Proyecto de biotecnología', 'Investigación en biotecnología vegetal', 3000000, 'Privada', 'Fondos privados', '2022-03-15', '2024-09-20');

-- Insertar datos en la tabla tipo_producto
INSERT INTO tipo_producto (id, categoria, clase, nombre, tipologia) 
VALUES 
(1, 'Tecnología', 'Software', 'Aplicación Móvil', 'App'),
(2, 'Ciencia', 'Artículo', 'Artículo Científico', 'Publicación');

-- Insertar datos en la tabla producto
INSERT INTO producto (id, nombre, categoria, fecha_entrega, proyecto, tipo_producto) 
VALUES 
(1, 'App de IA', 'Tecnología', '2024-01-15', 1, 1),
(2, 'Artículo sobre biotecnología', 'Ciencia', '2023-12-01', 2, 2);

-- Insertar datos en la tabla termino_clave
INSERT INTO termino_clave (termino, termino_ingles) 
VALUES 
('Inteligencia Artificial', 'Artificial Intelligence'),
('Biotecnología', 'Biotechnology'),
('Innovación', 'Innovation');

-- Insertar datos en la tabla area_aplicacion
INSERT INTO area_aplicacion (id, nombre) 
VALUES 
(1, 'Industria 4.0'),
(2, 'Agricultura Sostenible');

-- Insertar datos en la tabla objetivo_desarrollo_sostenible
INSERT INTO objetivo_desarrollo_sostenible (id, nombre, categoria) 
VALUES 
(1, 'Producción y consumo responsable', 'Economía circular'),
(2, 'Acción por el clima', 'Medio ambiente');

-- Insertar datos en la tabla area_conocimiento
INSERT INTO area_conocimiento (id, gran_area, area, disciplina) 
VALUES 
(1, 'Ingeniería', 'Tecnología', 'Inteligencia Artificial'),
(2, 'Ciencias', 'Biología', 'Biotecnología');

-- Insertar datos en la tabla grupo_investigacion
INSERT INTO grupo_investigacion (id, nombre, url_gruplac, categoria, convocatoria, fecha_fundacion, universidad, interno, ambito) 
VALUES 
(1, 'Grupo IA', 'http://gruplac.colciencias.com/ia', 'A', '2022', '2015-05-01', 1, 1, 'Nacional'),
(2, 'Grupo Biotecnología', 'http://gruplac.colciencias.com/biotec', 'B', '2023', '2017-07-15', 2, 0, 'Internacional');

-- Insertar datos en la tabla semillero
INSERT INTO semillero (id, nombre, fecha_fundacion, grupo_investigacion) 
VALUES 
(1, 'Semillero de IA', '2019-08-01', 1),
(2, 'Semillero de Biotecnología', '2020-09-15', 2);

-- Insertar datos en la tabla semillero_linea
INSERT INTO semillero_linea (semillero, linea_investigacion) 
VALUES 
(1, 1),
(2, 2);

-- Insertar datos en la tabla grupo_linea
INSERT INTO grupo_linea (grupo_investigacion, linea_investigacion) 
VALUES 
(1, 1),
(2, 2);

-- Insertar datos en la tabla docente_departamento
INSERT INTO docente_departamento (docente, departamento, dedicacion, modalidad, fecha_ingreso, fecha_salida) 
VALUES 
(1001, 1, 'Tiempo Completo', 'Presencial', '2015-01-01', NULL),
(1002, 2, 'Medio Tiempo', 'Presencial', '2017-05-01', NULL);

-- Insertar datos en la tabla participa_semillero
INSERT INTO participa_semillero (docente, semillero, rol, fecha_inicio, fecha_fin) 
VALUES 
(1001, 1, 'Líder', '2019-08-01', NULL),
(1002, 2, 'Investigador', '2020-09-15', NULL);

-- Insertar datos en la tabla participa_grupo
INSERT INTO participa_grupo (docente_cedula, grupo_investigacion_id, rol, fecha_inicio, fecha_fin) 
VALUES 
(1001, 1, 'Investigador', '2015-05-01', NULL),
(1002, 2, 'Coordinador', '2017-07-15', NULL);

-- Insertar datos en la tabla alianza
INSERT INTO alianza (aliado, departamento, fecha_inicio, fecha_fin, docente) 
VALUES 
(123456789, 1, '2022-01-01', NULL, 1001),
(987654321, 2, '2023-03-15', NULL, 1002);

-- Insertar datos en la tabla aliado_proyecto
INSERT INTO aliado_proyecto (aliado, proyecto) 
VALUES 
(123456789, 1),
(987654321, 2);

-- Insertar datos en la tabla desarrolla
INSERT INTO desarrolla (docente, proyecto, rol, descripcion) 
VALUES 
(1001, 1, 'Director', 'Desarrollo de modelos de IA para la industria'),
(1002, 2, 'Investigador Principal', 'Investigación avanzada en biotecnología');

-- Insertar datos en la tabla palabras_clave
INSERT INTO palabras_clave (proyecto, termino_clave) 
VALUES 
(1, 'Inteligencia Artificial'),
(2, 'Biotecnología');

-- Insertar datos en la tabla ac_proyecto
INSERT INTO ac_proyecto (proyecto, area_conocimiento) 
VALUES 
(1, 1),
(2, 2);

-- Insertar datos en la tabla proyecto_linea
INSERT INTO proyecto_linea (proyecto, linea_investigacion) 
VALUES 
(1, 1),
(2, 2);

-- Insertar datos en la tabla ods_proyecto
INSERT INTO ods_proyecto (proyecto, ods) 
VALUES 
(1, 1),
(2, 2);

-- Insertar datos en la tabla aa_proyecto
INSERT INTO aa_proyecto (proyecto, area_aplicacion) 
VALUES 
(1, 1),
(2, 2);

-- Insertar datos en la tabla ac_linea
INSERT INTO ac_linea (linea_investigacion, area_conocimiento) 
VALUES 
(1, 1),
(2, 2);

-- Insertar datos en la tabla ods_linea
INSERT INTO ods_linea (linea_investigacion, ods) 
VALUES 
(1, 1),
(2, 2);

-- Insertar datos en la tabla aa_linea
INSERT INTO aa_linea (area_aplicacion, linea_investigacion) 
VALUES 
(1, 1),
(2, 2);

-- Insertar datos en la tabla docente_producto
INSERT INTO docente_producto (docente, producto) 
VALUES 
(1001, 1),
(1002, 2);

-- Insertar datos en la tabla estudio_ac
INSERT INTO estudio_ac (estudio, area_conocimiento) 
VALUES 
(1, 1),
(2, 2);

-- Insertar datos en la tabla apoyo_profesoral
INSERT INTO apoyo_profesoral (estudios, con_apoyo, institucion, tipo) 
VALUES 
(1, 1, 'Colciencias', 'Beca Total'),
(2, 1, 'Colciencias', 'Beca Parcial');

-- Insertar datos en la tabla beca
INSERT INTO beca (estudios, tipo, institucion, fecha_inicio, fecha_fin) 
VALUES 
(1, 'Beca Doctoral', 'Colciencias', '2010-01-01', '2013-12-31'),
(2, 'Beca Maestría', 'Minciencias', '2005-01-01', '2007-12-31');

-- Insertar datos en la tabla evaluacion_docente
INSERT INTO evaluacion_docente (calificacion, semestre, docente) 
VALUES 
(4.5, '2024-1', 1001),
(4.2, '2024-1', 1002);

-- Insertar datos en la tabla reconocimiento
INSERT INTO reconocimiento (tipo, fecha, institucion, nombre, ambito, docente) 
VALUES 
('Premio Nacional', '2022-01-01', 'Colciencias', 'Investigador Destacado', 'Nacional', 1001),
('Premio Regional', '2023-01-01', 'Minciencias', 'Innovación en Biotecnología', 'Regional', 1002);

-- Insertar datos en la tabla red
INSERT INTO red (idr, nombre, url, pais) 
VALUES 
(1, 'Red de Innovación', 'http://redinnovacion.com', 'Colombia'),
(2, 'Red de Biotecnología', 'http://redbiotec.com', 'Colombia');

-- Insertar datos en la tabla red_docente
INSERT INTO red_docente (red, docente, fecha_inicio, fecha_fin, act_destacadas) 
VALUES 
(1, 1001, '2018-01-01', NULL, 'Participación en proyectos de innovación en IA'),
(2, 1002, '2020-01-01', NULL, 'Investigaciones en biotecnología avanzada');

-- Insertar datos en la tabla experiencia
INSERT INTO experiencia (nombre_cargo, institucion, tipo, fecha_inicio, fecha_fin, docente) 
VALUES 
('Ingeniero de Software', 'Empresa Innovadora', 'Tiempo Completo', '2010-01-01', '2015-12-31', 1001),
('Investigador en Biotecnología', 'Soluciones Tecnológicas', 'Medio Tiempo', '2015-01-01', '2020-12-31', 1002);

-- Insertar datos en la tabla programa_ac
INSERT INTO programa_ac (programa, area_conocimiento) 
VALUES 
(1, 1),
(2, 2);

-- Insertar datos en la tabla acreditacion
INSERT INTO acreditacion (resolucion, tipo, calificacion, fecha_inicio, fecha_fin, programa) 
VALUES 
(12345, 'Alta Calidad', '5 años', '2020-01-01', '2025-01-01', 1),
(67890, 'Alta Calidad', '4 años', '2019-01-01', '2023-01-01', 2);

-- Insertar datos en la tabla registro_calificado
INSERT INTO registro_calificado (codigo, cant_creditos, hora_acom, hora_ind, metodologia, fecha_inicio, fecha_fin, duracion_anios, duracion_semestres, tipo_titulacion, programa) 
VALUES 
(1111, '150', '3000', '1000', 'Presencial', '2020-01-01', '2025-01-01', '5', '10', 'Profesional', 1),
(2222, '180', '3500', '1500', 'Virtual', '2019-01-01', '2023-01-01', '4', '8', 'Tecnológico', 2);

-- Insertar datos en la tabla activ_academica
INSERT INTO activ_academica (id, nombre, num_creditos, tipo, area_formacion, h_acom, h_indep, idioma, espejo, entidad_espejo, pais_espejo, disenio) 
VALUES 
(1, 'Inteligencia Artificial Avanzada', 4, 'Teórico-Práctico', 'Ingeniería', 64, 128, 'Español', 1, 'Universidad Nacional de México', 'México', 1),
(2, 'Biotecnología Aplicada', 3, 'Teórico', 'Ciencias', 48, 96, 'Español', 0, '', '', 2);

-- Insertar datos en la tabla enfoque
INSERT INTO enfoque (id, nombre, descripcion) 
VALUES 
(1, 'Enfoque Técnico', 'Centrado en aspectos técnicos de la disciplina'),
(2, 'Enfoque Investigativo', 'Orientado a la investigación y desarrollo científico');

-- Insertar datos en la tabla enfoque_rc
INSERT INTO enfoque_rc (enfoque, registro_calificado) 
VALUES 
(1, 1111),
(2, 2222);

-- Insertar datos en la tabla aspecto_normativo
INSERT INTO aspecto_normativo (id, tipo, descripcion, fuente) 
VALUES 
(1, 'Ley', 'Normativa sobre IA', 'Ministerio de Ciencia'),
(2, 'Regulación', 'Regulación en biotecnología', 'Ministerio de Salud');

-- Insertar datos en la tabla an_programa
INSERT INTO an_programa (aspecto_normativo, programa) 
VALUES 
(1, 1),
(2, 2);

-- Insertar datos en la tabla practica_estrategia
INSERT INTO practica_estrategia (id, tipo, nombre, descripcion) 
VALUES 
(1, 'Proyecto de Aula', 'Desarrollo de Aplicaciones', 'Desarrollo de aplicaciones con IA'),
(2, 'Investigación', 'Biotecnología', 'Investigación aplicada en biotecnología');

-- Insertar datos en la tabla programa_pe
INSERT INTO programa_pe (programa, practica_estrategia) 
VALUES 
(1, 1),
(2, 2);

-- Insertar datos en la tabla aa_rc
INSERT INTO aa_rc (activ_academicas_idcurso, registro_calificado_codigo, componente, semestre) 
VALUES 
(1, 1111, 'Componente técnico', '2024-1'),
(2, 2222, 'Componente investigativo', '2024-1');

-- Insertar datos en la tabla pasantia
INSERT INTO pasantia (id, nombre, pais, empresa, descripcion, programa) 
VALUES 
(1, 'Pasantía en IA', 'Colombia', 'Empresa Innovadora', 'Desarrollo de soluciones IA', 1),
(2, 'Pasantía en Biotecnología', 'Colombia', 'Soluciones Tecnológicas', 'Investigación en biotecnología', 2);

-- Insertar datos en la tabla premio
INSERT INTO premio (id, nombre, descripcion, fecha, entidad_otorgante, pais, programa) 
VALUES 
(1, 'Premio Nacional de Innovación', 'Reconocimiento por innovaciones tecnológicas', '2023-01-01', 'Colciencias', 'Colombia', 1),
(2, 'Premio en Biotecnología', 'Reconocimiento por investigación en biotecnología', '2024-01-01', 'Minciencias', 'Colombia', 2);

-- Insertar datos en la tabla car_innovacion
INSERT INTO car_innovacion (id, nombre, descripcion, tipo) 
VALUES 
(1, 'Innovación en IA', 'Nuevas técnicas de inteligencia artificial aplicada', 'Tecnológica'),
(2, 'Biotecnología Avanzada', 'Nuevas investigaciones en biotecnología vegetal', 'Científica');

-- Insertar datos en la tabla programa_ci
INSERT INTO programa_ci (programa, car_innovacion) 
VALUES 
(1, 1),
(2, 2);

-- Insertar datos en la tabla intereses_futuros
INSERT INTO intereses_futuros (docente, termino_clave) 
VALUES 
(1001, 'Inteligencia Artificial'),
(1002, 'Biotecnología');

```

### trigger auto asignacion de credenciales tipo 2

```sql
CREATE TRIGGER trg_insert_usuario
ON usuarios
AFTER INSERT
AS
BEGIN
    -- Insertar en la tabla credenciales con el id del nuevo usuario y el tipo de credencial 4
    INSERT INTO credenciales (usuarios, tiposCredenciales)
    SELECT id, 2
    FROM INSERTED;
END;
```
