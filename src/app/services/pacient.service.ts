import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Pacient } from '../model/Pacient';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class PacientService {
  constructor(private http: HttpClient) {}

  // Get all pacients
  getPatients(): Observable<Pacient[]> {
    return this.http.get<Pacient[]>(
      'https://6252a63c7f7fa1b1dde84f67.mockapi.io/api/pacients'
    );
  }

  // Add new pacient
  addPatient(pacient: Pacient): Observable<Pacient> {
    return this.http.post<Pacient>(
      `https://6252a63c7f7fa1b1dde84f67.mockapi.io/api/pacients`,
      pacient,
      httpOptions
    );
  }

  // Update pacient
  updatePatient(pacient: Pacient): Observable<Pacient> {
    return this.http.put<Pacient>(
      `https://6252a63c7f7fa1b1dde84f67.mockapi.io/api/pacients/${pacient.id}`,
      pacient,
      httpOptions
    );
  }

  // Remove pacient
  removePatient(pacientId: number): Observable<Pacient> {
    return this.http.delete<Pacient>(
      `https://6252a63c7f7fa1b1dde84f67.mockapi.io/api/pacients/${pacientId}`,
      httpOptions
    );
  }
}
