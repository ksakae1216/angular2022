import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginApiService, User } from '@myorg/myorg/shared/api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private readonly loginApiService: LoginApiService,
    private http: HttpClient
  ) {}

  postLogin(loginId: string, password: string): Observable<User> {
    return this.loginApiService.postLogin({ body: { loginId, password } });
  }
}
