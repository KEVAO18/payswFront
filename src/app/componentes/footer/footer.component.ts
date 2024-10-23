import { Component } from '@angular/core';
import { ConfigModule } from '../../config/config.module';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  public config = new ConfigModule();

}
