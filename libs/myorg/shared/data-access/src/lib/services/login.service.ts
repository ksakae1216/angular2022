import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginApiService } from '@myorg/myorg/shared/api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private readonly loginApiService: LoginApiService,
    private http: HttpClient
  ) {}

  postLogin(
    loginId: string,
    password: string
  ): Observable<{ accessToken?: string; userName?: string }> {
    return this.loginApiService.postLogin({ body: { loginId, password } });
  }
}
