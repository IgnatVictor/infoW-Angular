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
  private urlApi= 'https://6252a63c7f7fa1b1dde84f67.mockapi.io/api/pacients';

  constructor(private http: HttpClient) {}

  // Get all pacients
  getPacients(): Observable<Pacient[]> {
    return this.http.get<Pacient[]>(
      this.urlApi
    );
  }

  // Add new pacient
  addPacient(pacient: Pacient): Observable<Pacient> {
    return this.http.post<Pacient>(
      this.urlApi,
      pacient,
      httpOptions
    );
  }

  // Update pacient
  updatePacient(pacient: Pacient): Observable<Pacient> {
    return this.http.put<Pacient>(
      `https://6252a63c7f7fa1b1dde84f67.mockapi.io/api/pacients/${pacient.id}`,
      pacient,
      httpOptions
    );
  }

  // Remove pacient
  removePacient(pacientId: number): Observable<Pacient> {
    return this.http.delete<Pacient>(
      `https://6252a63c7f7fa1b1dde84f67.mockapi.io/api/pacients/${pacientId}`,
      httpOptions
    );
  }
}
