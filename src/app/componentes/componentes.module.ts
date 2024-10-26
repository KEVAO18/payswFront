import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NavItemComponent } from './nav-item/nav-item.component';
import { FooterComponent } from './footer/footer.component';
import { TablaComponent } from './tabla/tabla.component';
import { HeaderComponent } from './header/header.component';
import { TablasItemsComponent } from './tablas-items/tablas-items.component';
import { RouterLink } from '@angular/router';
import { ConfigModule } from '../config/config.module';
import { TablasMenuComponent } from './tablas-menu/tablas-menu.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MostrarRegistroComponent } from './mostrar-registro/mostrar-registro.component';



@NgModule({
  declarations: [
    NavbarComponent,
    NavItemComponent,
    FooterComponent,
    TablaComponent,
    HeaderComponent,
    TablasItemsComponent,
    TablasMenuComponent,
    LoginComponent,
    RegisterComponent,
    MostrarRegistroComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    ConfigModule
  ],
  exports: [
    NavbarComponent,
    NavItemComponent,
    FooterComponent,
    TablaComponent,
    HeaderComponent,
    TablasItemsComponent,
    TablasMenuComponent,
    MostrarRegistroComponent
  ]
})
export class ComponentesModule { }
