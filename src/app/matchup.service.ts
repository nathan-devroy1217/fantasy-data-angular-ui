import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Matchup } from './matchup';


@Injectable({
  providedIn: 'root'
})
export class MatchupService {

  private matchupUrlPrefix: string = 'https://ff-api-service-rbejey3lcq-uc.a.run.app/fantasy/v1/fantasy/matchup/';
  private matchupUrlSuffix : string = '?week='

  constructor(private http: HttpClient) { }

  getMatchupDetail(year: string, week: string) : Observable<Matchup> {
    console.log('INSIDE MatchupService.getMatchupDetail()');
    let matchupUrlWithParams = this.matchupUrlPrefix + year + this.matchupUrlSuffix + week;
    console.log(`Calling fantasy service using url ${matchupUrlWithParams}`);

    return this.http.get<Matchup>(matchupUrlWithParams)
    .pipe(catchError
      (this.handleError<Matchup>('getMatchupDetail'))
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
