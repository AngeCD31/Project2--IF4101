import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

const endpoint = 'http://localhost:8081/api/';
const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class SpotService {

  constructor(private http: HttpClient) { 



  }

  get(): Observable<any> {

    //return this.http.get(endpoint+'Spots',httpOptions)
    return this.http.get(endpoint + 'spot/spots').pipe(catchError(this.handleError<any>('list spots')));

  }

  delete(id: number): Observable<any> {
    return this.http.delete(endpoint+'spot/delete/'+id,httpOptions)
    .pipe(
      catchError(this.handleError('deleteRol')));
  }

  add(spot: any){
    return this.http.post(endpoint+'spot/add/', spot, httpOptions)
  }

  getById(id:any): Observable<any> {
    return this.http.get(endpoint+'spot/spots/'+id,httpOptions).pipe(
      catchError(this.handleError('getSpot'))
    );
  }

  getByParking(id:any): Observable<any> {
    return this.http.get(endpoint+'spot/spots/getByParking/'+id,httpOptions)
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