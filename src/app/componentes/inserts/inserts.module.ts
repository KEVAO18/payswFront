import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsertTipo1Component } from './insert-tipo1/insert-tipo1.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfigModule } from '../../config/config.module';
import { RouterLink } from '@angular/router';




@NgModule({
  declarations: [
    InsertTipo1Component
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ConfigModule,
    RouterLink
  ],
  exports: [
    InsertTipo1Component
  ]
})
export class InsertsModule { }
