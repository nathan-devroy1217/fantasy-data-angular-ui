import { Standings } from './standings';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StandingsService {

  private standingsUrl = 'https://ff-api-service-rbejey3lcq-uc.a.run.app/fantasy/v1/fantasy/league/data/';

  constructor(
    private http: HttpClient) { }

    getStandings(selectedYear: string): Observable<Standings> {
      console.log('RUNNING HTTP CALL FOR FANTASY STANDINGS FOR SELECTED YEAR: ' + selectedYear);
      return this.http.get<Standings>(this.standingsUrl + selectedYear)
      .pipe(
        catchError(this.handleError<Standings>('getStadings'))
      );
    }

    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
        console.error(error);
        console.log(`${operation} failed: ${error.message}`);
        return of(result as T);
      };
    }
}
