import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';
import { switchMap, tap } from 'rxjs/operators';
import jwtDecode from 'jwt-decode';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    const tokenExpiration = localStorage.getItem('refresh');

    if (token && tokenExpiration) {
      const token_exp : any = jwtDecode(token)
      const refresh_token_exp: any = jwtDecode(tokenExpiration)
      const expirationTimeToken = new Date(token_exp.exp * 1000).getTime();
      const expirationTime = new Date(refresh_token_exp.exp * 1000).getTime();
      const currentTime = new Date().getTime();

      request = request.clone({
        setHeaders: {
          authorization: 'Bearer ' + token
        }
      })

      if (currentTime >= expirationTimeToken - 60000) {
        return this.authService.refreshToken().pipe(
          tap((response) => {
            const newToken = response.access;
            const newTokenExpiration = response.expires_in;
            console.log(newTokenExpiration)
            // Actualiza el token de acceso y su expiración en el almacenamiento local
            localStorage.setItem('token', newToken);
            localStorage.setItem('refresh', newTokenExpiration);
          }),
          switchMap(() => next.handle(request))
        );
      } else if (currentTime >= expirationTime) {
        this.authService.logout(); // Cierra la sesión automáticamente
      }
    }
    console.log(request)
    return next.handle(request);
  }
}
