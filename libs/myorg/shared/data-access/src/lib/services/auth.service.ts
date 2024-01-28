import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly cookieService: CookieService) {}

  setCookie(name: string, value: string) {
    this.cookieService.set(name, value, {
      expires: this.getExpiredAt(),
      secure: true,
    });
  }

  private getExpiredAt(): Date {
    const expiredAt: Date = new Date();
    expiredAt.setHours(expiredAt.getHours() + 8);

    return expiredAt;
  }

  getCookie(name: string): string {
    return this.cookieService.get(name);
  }

  isTokenExist(): boolean {
    const token: string = this.getCookie('token');
    if (token) {
      return true;
    }

    return false;
  }

  deleteCookie(name: string) {
    this.cookieService.delete(name);
  }
}
