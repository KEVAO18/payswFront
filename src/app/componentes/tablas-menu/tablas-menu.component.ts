import { Component, Input, SimpleChanges } from '@angular/core';
import { ConfigModule, tabla, usuario } from '../../config/config.module';
import { SessionesService } from '../../servicios/sessiones.service';

@Component({
  selector: 'app-tablas-menu',
  templateUrl: './tablas-menu.component.html',
  styleUrl: './tablas-menu.component.scss'
})
export class TablasMenuComponent {
  public config: ConfigModule = new ConfigModule();

  public tablas: tabla[] = [];

  @Input() filtro!: number;

  public loggedIn?: boolean;

  constructor(private auth: SessionesService) {

    this.loggedIn = this.auth.isAuth();

  }

  ngOnInit(): void {

    // verificar si el usuario es administrador y si lo es verificar si el filtro existe y si existe solo optener las tablas de ese tipo y luego guardar en un objeto de tipo tabla
    if (this.auth.isAdmin()) {

      if (this.filtro) {

        this.tablas = this.config.API_TABLAS.filter(tabla => (tabla.tipo == this.filtro));

      } else {

        this.tablas = this.config.API_TABLAS;

      }

    // si el usuario no es administrador solo se le mostraran las tablas que no sean de tipo 4 y 5
    } else {
      if (this.filtro) {

        this.tablas = this.config.API_TABLAS.filter(tabla => (tabla.tipo == this.filtro && tabla.tipo != 4 && tabla.tipo != 5));

      } else {

        this.tablas = this.config.API_TABLAS.filter(tabla => (tabla.tipo != 4 && tabla.tipo != 5));

      }
    }

  }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes['filtro']) {

      // verificar si el usuario es administrador y si lo es verificar si el filtro existe y si existe solo optener las tablas de ese tipo y luego guardar en un objeto de tipo tabla
      if (this.auth.isAdmin()) {

        if (this.filtro) {

          this.tablas = this.config.API_TABLAS.filter(tabla => (tabla.tipo == this.filtro));

        } else {

          this.tablas = this.config.API_TABLAS;

        }
    
      // si el usuario no es administrador solo se le mostraran las tablas que no sean de tipo 4 y 5
      } else {
        if (this.filtro) {

          this.tablas = this.config.API_TABLAS.filter(tabla => (tabla.tipo == this.filtro && tabla.tipo != 4 && tabla.tipo != 5));

        } else {

          this.tablas = this.config.API_TABLAS.filter(tabla => (tabla.tipo != 4 && tabla.tipo != 5));

        }
      }

    }

  }

}
