import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tablas-items',
  templateUrl: './tablas-items.component.html',
  styleUrl: './tablas-items.component.scss'
})
export class TablasItemsComponent {
  // recibir un item que es un object con la estructura { tabla: '', url: '' }
  @Input() item!: { tabla: string, url: string }[];
}
