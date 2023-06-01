import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, empty, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  private apiUrl: string = 'http://localhost:8080';

  createUser(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(`${this.apiUrl}/user`, formData);
  }

  login(formData: FormData): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/login`, formData);
  }
}
