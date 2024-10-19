import { Component } from '@angular/core';
import { ConfigModule } from '../../config/config.module';

@Component({
  selector: 'app-tablas-menu',
  templateUrl: './tablas-menu.component.html',
  styleUrl: './tablas-menu.component.scss'
})
export class TablasMenuComponent {
  public config: ConfigModule = new ConfigModule();
}
