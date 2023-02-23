import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../models/login.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  postLogin(loginId: string, password: string): Observable<Login> {
    return this.http.post<Login>('/api/login', { loginId, password });
  }
}
