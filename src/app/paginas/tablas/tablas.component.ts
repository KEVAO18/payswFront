import { ConfigModule } from './../../config/config.module';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SessionesService } from '../../servicios/sessiones.service';

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrl: './tablas.component.scss'
})
export class TablasComponent implements OnInit{
  
  filtro: any;

  public config: ConfigModule = new ConfigModule();

  public isAdmin?: boolean;

  constructor(private route: ActivatedRoute, private auth: SessionesService){
    this.isAdmin = this.auth.isAdmin();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.filtro = params.get('filtro');
      }
    );
  }
}
