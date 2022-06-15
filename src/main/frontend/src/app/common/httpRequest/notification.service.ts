import { Injectable } from '@angular/core';
//import { environment } from "../../../environments/environment";

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NotificationCreate } from '../object/notificationCreate';
import { Notification } from '../object/notification';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private http: HttpClient) {}

  private apiServerUrl = 'https://dienstleistungs-software.herokuapp.com/notification';

  public getAllNotification(userEmail: string): Observable<Notification[]> {
    const url = `${this.apiServerUrl}/${userEmail}`;
    return this.http.get<Notification[]>(url);
  }

  public getNotificationByUserAndService(
    userEmail: string,
    serviceId: number
  ): Observable<Notification> {
    const url = `${this.apiServerUrl}/${userEmail}/${serviceId}`;
    return this.http.get<Notification>(url);
  }

  public createNotification(
    notificationCreate: NotificationCreate
  ): Observable<Notification> {
    const url = `${this.apiServerUrl}/create`;
    return this.http.post<Notification>(url, notificationCreate);
  }

  public deleteNotification(userEmail: string, serviceId: number) {
    const url = `${this.apiServerUrl}/delete/${userEmail}/${serviceId}`;
    return this.http.delete(url);
  }
}
