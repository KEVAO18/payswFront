import { Component, Input, OnInit } from '@angular/core';
import { ConfigModule } from '../../config/config.module';

@Component({
  selector: 'app-new-insert',
  templateUrl: './new-insert.component.html',
  styleUrls: ['./new-insert.component.scss']
})
export class NewInsertComponent implements OnInit {
  @Input() tabla!: string;

  config: ConfigModule = new ConfigModule();

  tipo!: number;

  constructor() { }

  ngOnInit(): void {
    //buscar tipo de tabla en la configuracion 
    this.tipo = this.config.API_TABLAS.find((tabla) => tabla.tabla === this.tabla)?.tipo || 0;
  }
}
