import { Component, Input } from '@angular/core';
import { GetDataByApiService } from '../../../servicios/get-data-by-api.service';

@Component({
  selector: 'app-nuevo-registro',
  templateUrl: './nuevo-registro.component.html',
  styleUrl: './nuevo-registro.component.scss'
})
export class NuevoRegistroComponent {

  @Input() tabla!: string;

constructor(private servicioDatos: GetDataByApiService){}

  ngOnInit(): void {
    
  }
}
