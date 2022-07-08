import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

const endpoint = 'https://localhost:7131/api/';
const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ParkingService {

  constructor(private http: HttpClient) { 



  }

  get(): Observable<any> {

    return this.http.get(endpoint+'Parkings',httpOptions)

  }

  delete(id: number): Observable<any> {
    return this.http.delete(endpoint+'Parkings/'+id,httpOptions)
    .pipe(
      catchError(this.handleError('deleteParking'))
    );
  }

  add(parking: any){
    return this.http.post(endpoint+'Parkings/', parking, httpOptions)
  }

  getById(id:any): Observable<any> {
    return this.http.get(endpoint+'Parkings/'+id,httpOptions)
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };

  
  }


}