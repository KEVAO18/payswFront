import { CanActivateFn } from '@angular/router';
import { SessionesService } from '../servicios/sessiones.service';

export const isAdminGuard: CanActivateFn = (route, state) => {
  return (typeof window !== 'undefined' && !!localStorage.getItem('userOnline') && JSON.parse(localStorage.getItem('userOnline') || '{}').idRol == 1);
};
