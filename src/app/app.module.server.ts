import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { ComponentesModule } from './componentes/componentes.module';
import { PaginasModule } from './paginas/paginas.module';
import { ConfigModule } from './config/config.module';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
    ComponentesModule,
    PaginasModule,
    ConfigModule
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
