import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevoRegistroComponent } from './nuevo-registro/nuevo-registro.component';
import { ActualizarRegistroComponent } from './actualizar-registro/actualizar-registro.component';



@NgModule({
  declarations: [
    NuevoRegistroComponent,
    ActualizarRegistroComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FormsModule { }
