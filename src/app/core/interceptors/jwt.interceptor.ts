// jwt.interceptor.ts (coloque em core/interceptors)
import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    if (token) {
      req = req.clone({
        setHeaders: {
          
          Authorization: `Bearer ${token}`
        }
      });
    }
    console.log('Interceptando requisição com token:', token);
    return next.handle(req);
  }
}