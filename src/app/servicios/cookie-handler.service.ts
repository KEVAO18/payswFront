import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CookieHandlerService {

  constructor(private CookieService: CookieService) { }

  getCookie(key: string): string {
    return this.CookieService.get(key);
  }

  setCookie(key: string, value: string, expires: number = 1): void {
    const expiresDate = new Date();
    expiresDate.setDate(expiresDate.getDate() + expires);
    this.CookieService.set(key, value, expiresDate, '/');
  }

  checkCookie(key: string): boolean {
    return !this.CookieService.check(key);
  }

  deleteCookie(key: string): void {
    this.CookieService.delete(key, '/');
  }

  deleteAllCookies(): void {
    this.CookieService.deleteAll('/');
  }
}
