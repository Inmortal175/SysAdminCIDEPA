import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { SignIn } from 'src/app/models/auth/inicio_sesion';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private apiUrl = 'http://127.0.0.1:8000/user/';
    constructor(
        private http: HttpClient,
        private route: Router,
    ) {}

    login(userCredential: SignIn) {
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
          }),
          withCredentials: true,
        };
        return this.http.post(
          this.apiUrl + 'token/',
          userCredential,
          httpOptions,
        );
      }

    refreshToken(): Observable<any> {
        const url = `${this.apiUrl}token/refresh/`;
        const refreshToken = localStorage.getItem('refresh');
        const body = { refresh: refreshToken };

        return this.http.post(url, body);
    }

    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('refresh');
        this.route.navigate(['/login']);
    }

    uploadProfilePhoto(photo: File) {
        const formData = new FormData();
        formData.append('profile', photo);
        console.log(formData.get('profile'));

        return this.http.post(this.apiUrl + 'profile/upload-photo/', formData);
    }
}
