import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from '../interfaces/Vehicle';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class VehiclesService {
  constructor(private http: HttpClient) {}
  private apiUrl: string = 'http://localhost:8080';

  createVehicle(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(`${this.apiUrl}/vehicle`, formData);
  }

  getAllVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(`${this.apiUrl}/vehicle`);
  }

  getSingleVehicle(id: string): Observable<Vehicle> {
    return this.http.get<Vehicle>(`${this.apiUrl}/vehicle/${id}`);
  }

  remove(id: string) {
    return this.http.delete<Vehicle>(`${this.apiUrl}/vehicle/${id}`);
  }

  update(id: string, formData: FormData): Observable<FormData> {
    return this.http.put<FormData>(`${this.apiUrl}/vehicle/${id}`, formData);
  }
}
