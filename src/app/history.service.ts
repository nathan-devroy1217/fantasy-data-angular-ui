import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FantasyHistoryComposite } from './FantasyHistoryComposite';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  private historyUrl = 'https://ff-api-service-rbejey3lcq-uc.a.run.app/fantasy/v1/league/history';

  constructor(
    private http: HttpClient) { }

    getHistory() : Observable<FantasyHistoryComposite> {
      console.log('RUNNING HTTP CALL FOR FANTASY HISTORY');
      return this.http.get<FantasyHistoryComposite>(this.historyUrl)
      .pipe(
        catchError(this.handleError<FantasyHistoryComposite>('getStadings'))
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
