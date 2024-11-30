import { Component } from '@angular/core';
import { SessionesService } from '../../servicios/sessiones.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrl: './error.component.scss'
})
export class ErrorComponent {

  public isAuth?:boolean;

  constructor(
    private auth: SessionesService,
  ) {
    this.isAuth = this.auth.isAuth();
  }
}
