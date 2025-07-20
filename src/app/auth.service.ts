import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserResponse } from './Interface/user-response';
import { UserCreate } from './Interface/user-create';
import { Login } from './Interface/login';



@Injectable({ providedIn: 'root' })

export class AuthService {
  private api = 'https://localhost:7031/api/v1';


  constructor(private http: HttpClient) {}

  login(user: Login): Observable<any> {
    return this.http.post(`${this.api}/auth/login`, user);
  }

  getUsersApi(): Observable<any> {
  return this.http.get<UserResponse[]>(`${this.api}/users`);    
  }

    createUser(user: UserCreate): Observable<any> {
    return this.http.post(`${this.api}/users`,user );
  }


}