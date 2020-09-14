import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Shelter } from './shelter.model';
import { catchError, map, timeout } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json' 
  })
};

@Injectable({
  providedIn: 'root'
})
export class SuperAdminHttpService {

  constructor(private http: HttpClient) { }

  private serviceUrl = `http://172.16.22.128:5000`;

  getAllShelters(): Observable<Shelter[]> {
    return this.http.get<Shelter[]>(this.serviceUrl + '/api/admin-shelters').pipe(
      timeout(5000),
      catchError((error: HttpErrorResponse) => {
        return throwError('There was an error connecting to the server'); 
        })
      );
  }

  toggleShelterHidden(shelter: Shelter): Observable<any> {
    return this.http.put<number>(this.serviceUrl + '/api/shelter', shelter, httpOptions) 
    .pipe(
      timeout(3500),
      map((data: any) => {
        return data;
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError('There was an error connecting to the server'); 
        })
      ); 
  }

  updateShelterStatus(shelter: Shelter): Observable<any> {
    return this.http.put<number>(this.serviceUrl + '/api/shelter-status', shelter, httpOptions) 
    .pipe(
      timeout(3500),
      map((data: any) => {
        return data;
      }),
      catchError((error: HttpErrorResponse) => {
        return throwError('There was an error connecting to the server'); 
        })
      ); 
  }
}