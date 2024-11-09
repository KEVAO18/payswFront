import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablasComponent } from './paginas/tablas/tablas.component';
import { LeerComponent } from './paginas/leer/leer.component';
import { HomeComponent } from './paginas/home/home.component';
import { EliminarComponent } from './paginas/eliminar/eliminar.component';
import { loginGuard } from './guardianes/login.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'tablas', component: TablasComponent, canActivate: [loginGuard] },
  { path: 'tabla/:tabla', component: LeerComponent, canActivate: [loginGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
