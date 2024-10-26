import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-leer',
  templateUrl: './leer.component.html',
  styleUrl: './leer.component.scss'
})
export class LeerComponent implements OnInit{

  tabla: any;

  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.tabla = params.get('tabla');
      }
    );
  }
}
