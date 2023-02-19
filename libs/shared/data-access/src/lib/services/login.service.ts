import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/login.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  postLogin(loginId: string, password: string) {
    return this.http.post<Login>('/api/login', { loginId, password });
  }
}
