import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL= 'http://127.0.0.1:8000/api'

  constructor(private http: HttpClient) {
    }

  getUsuarios():Observable<any>{
    return this.http.get(this.apiURL+'/users')
    .pipe(retry(3));
  }
    
  postData(data: any):Observable<any>{
    return this.http.post(this.apiURL+'/users/', data);
  }

  registerUser(data: any): Observable<any> {
    return this.http.post(this.apiURL+'/register', data);
  }

  getEstacionamiento(): Observable<any> {
    return this.http.get(this.apiURL+'/estacionamiento');
  }
  
  registerEstacionamiento(data: any): Observable<any> {
    return this.http.post(this.apiURL+'/estacionamiento', data);
  }

  registerVehiculo(data: any): Observable<any> {
    return this.http.post(this.apiURL+'/vehiculo', data);
  }
}
