import { Component } from '@angular/core';
import { ConfigModule } from '../../config/config.module';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  public config: ConfigModule = new ConfigModule();

  public menu = this.config.menu;
}
