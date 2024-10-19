import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearComponent } from './crear/crear.component';
import { LeerComponent } from './leer/leer.component';
import { ActualizarComponent } from './actualizar/actualizar.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { HomeComponent } from './home/home.component';
import { TablasComponent } from './tablas/tablas.component';
import { ComponentesModule } from '../componentes/componentes.module';



@NgModule({
  declarations: [
    CrearComponent,
    LeerComponent,
    ActualizarComponent,
    EliminarComponent,
    HomeComponent,
    TablasComponent,
  ],
  imports: [
    CommonModule,
    ComponentesModule
  ]
})
export class PaginasModule { }