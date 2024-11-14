import { CanActivateFn } from '@angular/router';

export const guestGuard: CanActivateFn = (route, state) => {
  return (typeof window !== 'undefined' && !localStorage.getItem('userOnline'));
};
