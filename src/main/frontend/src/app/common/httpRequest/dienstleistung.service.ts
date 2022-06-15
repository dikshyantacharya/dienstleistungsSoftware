import { Injectable } from '@angular/core';
import { Service } from '../object/service';
import { Observable } from 'rxjs';
//import { environment } from "../../../environments/environment";
import { HttpClient } from '@angular/common/http';
import { Dienstleistung } from '../object/dienstleistung';
import { User } from '../object/user';

@Injectable({
  providedIn: 'root',
})
export class DienstleistungService {
  private apiServerUrl = 'https://dienstleistungs-software.herokuapp.com/service';

  constructor(private http: HttpClient) {}

  public createDienstleistung(dienstleistung: Service): Observable<Service> {
    const url = `${this.apiServerUrl}/create`;
    return this.http.post<Service>(url, dienstleistung);
  }

  public getDienstleistungById(id: number): Observable<Dienstleistung> {
    const url = `${this.apiServerUrl}/${id}`;
    return this.http.get<Dienstleistung>(url);
  }

  public getMyJobs(userEmail: String): Observable<Dienstleistung[]> {
    const url = `${this.apiServerUrl}/my/${userEmail}`;
    return this.http.get<Dienstleistung[]>(url);
  }

  getAllJobs(userEmail: String): Observable<Dienstleistung[]> {
    const url = `${this.apiServerUrl}/other/${userEmail}`;
    return this.http.get<Dienstleistung[]>(url);
  }

  updateDienstleistung(
    dienstleistung: Dienstleistung
  ): Observable<Dienstleistung> {
    const url = `${this.apiServerUrl}/update`;
    return this.http.put<Dienstleistung>(url, dienstleistung);
  }

  deleteDienstleistung(id: number): Observable<any> {
    const url = `${this.apiServerUrl}/delete/${id}`;
    return this.http.delete(url);
  }

  getUserByServiceId(serviceId: number): Observable<User> {
    const url = `${this.apiServerUrl}/user/${serviceId}`;
    return this.http.get<User>(url);
  }
}
