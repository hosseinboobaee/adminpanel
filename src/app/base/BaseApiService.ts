import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BaseApiService<T> {
  constructor(private http: HttpClient) {}

  get(url: string): Observable<T[]> {
    return this.http.get<T[]>(url);
  }

  post(url: string, data: T): Observable<T> {
    return this.http.post<T>(url, data);
  }

  put(url: string, data: T): Observable<T> {
    return this.http.put<T>(url, data);
  }

  delete(url: string): Observable<void> {
    return this.http.delete<void>(url);
  }
}
