import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:8000/api/';
  constructor(
    private http: HttpClient,
    private route: Router,
  ) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      this.apiUrl + 'signin',
      {
        username,
        password,
      },
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
