import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  post(endpoint: string, data: any, headers?: HttpHeaders): Observable<any> {
    const url = `${this.baseUrl}/${endpoint}`;
    return this.http.post(url, data, { headers });
  }

  get(endpoint: string, headers?: HttpHeaders): Observable<any> {
    const url = `${this.baseUrl}/${endpoint}`;
    return this.http.get(url, { headers });
  }

  put(endpoint: string, data: any, headers?: HttpHeaders): Observable<any> {
    const url = `${this.baseUrl}/${endpoint}`;
    return this.http.put(url, data, { headers });
  }

  delete(endpoint: string, headers?: HttpHeaders): Observable<any> {
    const url = `${this.baseUrl}/${endpoint}`;
    return this.http.delete(url, { headers });
  }
}
