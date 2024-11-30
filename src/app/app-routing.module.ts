import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablasComponent } from './paginas/tablas/tablas.component';
import { LeerComponent } from './paginas/leer/leer.component';
import { HomeComponent } from './paginas/home/home.component';
import { loginGuard } from './guardianes/login.guard';
import { guestGuard } from './guardianes/guest.guard';
import { ErrorComponent } from './paginas/error/error.component';
import { DashboardComponent } from './paginas/dashboard/dashboard.component';
import { CrearComponent } from './paginas/crear/crear.component';
import { isAdminGuard } from './guardianes/is-admin.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'error', component: ErrorComponent },
  { path: 'home', component: HomeComponent, canActivate: [guestGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [loginGuard] },
  { path: 'tablas', component: TablasComponent, canActivate: [loginGuard] },
  { path: 'tablas/filtros/:filtro', component: TablasComponent, canActivate: [loginGuard] },
  { path: 'tabla/:tabla', component: LeerComponent, canActivate: [loginGuard] },
  { path: 'tabla/insertar/:tabla', component: CrearComponent, canActivate: [isAdminGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
