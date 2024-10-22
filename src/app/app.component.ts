import { Component } from '@angular/core';
import { ConfigModule } from './config/config.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  config = new ConfigModule();
  title = this.config.titulo;

}
