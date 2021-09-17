import { LeagueUtility } from './leagueUtility';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeagueUtilityService {


  private utilityUrl = 'https://ff-api-service-rbejey3lcq-uc.a.run.app/fantasy/v1/league/utility/years/active';

  constructor(
    private http: HttpClient
  ) { }

  getYearsActive(): Observable<LeagueUtility> {
    console.log('RUNNING HTTP CALL FOR ACTIVE FANTASY LEAGUE YEARS');
    return this.http.get<LeagueUtility>(this.utilityUrl)
    .pipe(
      catchError(this.handleError<LeagueUtility>('getMetadata'))
    );
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
