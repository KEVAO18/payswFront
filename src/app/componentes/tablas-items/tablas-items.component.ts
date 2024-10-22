import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tablas-items',
  templateUrl: './tablas-items.component.html',
  styleUrl: './tablas-items.component.scss'
})
export class TablasItemsComponent {
  @Input() item!: { tabla: string, url: string }[];
  
}
