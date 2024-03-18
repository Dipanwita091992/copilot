import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
  public currentPath:string='';
  public apiUrl = 'http://localhost:3000/api';
  public sessionDetails:any;

  constructor(private http: HttpClient) {
    
   }

   getLoginData(payload:any):Observable<any> {
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json');
    return this.http.post(this.apiUrl,payload, { headers });
   }

   getData(payload:any):Observable<any> {
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    return this.http.post(this.apiUrl,payload, { headers });

   }

}
