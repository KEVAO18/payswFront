import { SessionesService } from './../../servicios/sessiones.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-leer',
  templateUrl: './leer.component.html',
  styleUrl: './leer.component.scss'
})
export class LeerComponent implements OnInit{

  tabla: any;

  isAdmin: boolean;

  constructor(private route: ActivatedRoute, private sessiones: SessionesService){
    this.isAdmin = sessiones.isAdmin();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.tabla = params.get('tabla');
      }
    );
  }
}
