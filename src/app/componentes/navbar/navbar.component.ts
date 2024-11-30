import { SessionesService } from './../../servicios/sessiones.service';
import { Component } from '@angular/core';
import { ConfigModule, usuario } from '../../config/config.module';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  public config: ConfigModule = new ConfigModule();

  public loggedIn?: boolean;

  public userOnline: usuario;

  constructor(private auth: SessionesService){
    this.loggedIn = this.auth.isAuth();

    // traer el userOnline del localStorage y guardarlo en la variable userOnline
    if(this.loggedIn){
      this.userOnline = JSON.parse(localStorage.getItem('userOnline') || '{}')
    }else{
      this.userOnline = {
        documento: 0,
        nombreUsuario: '',
        nombre: '',
        email: '',
        idRol: 0
      };
    }
  }

  public outSession(){
    this.auth.logOut();
  }
}
