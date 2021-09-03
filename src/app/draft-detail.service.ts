import { DraftDetail } from './draftDetail';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DraftDetailService {

  private draftDetailUrlPrefix: string = 'https://ff-api-service-rbejey3lcq-uc.a.run.app/fantasy/v1/fantasy/draft/';
  private draftOverviewUrl: string = 'https://ff-api-service-rbejey3lcq-uc.a.run.app/fantasy/v1/fantasy/draft/';
  private draftDetailUrlPostfix: string = '/team?memberId=';

  constructor(private http: HttpClient) { }

  getDraftDetail(selectedYear: string, memberId : string) : Observable<DraftDetail> {
    console.log('RUNNING HTTP CALL FOR DRAFT DETAIL BY TEAM');
    return this.http.get<DraftDetail>(this.buildUrlQueryString(selectedYear, memberId))
    .pipe(
      catchError
      (this.handleError<DraftDetail>('getDraftDetail'))
    );
  }

  getDraftOverview(selectedYear : string) : Observable<DraftDetail> {
    console.log('RUNNING HTTP CALL FOR DRAFT OVERVIEW BY YEAR');
    return this.http.get<DraftDetail>(this.draftOverviewUrl + selectedYear)
    .pipe(
      catchError
      (this.handleError<DraftDetail>('getDraftOverview'))
    );
  }

  private buildUrlQueryString(year : string, memberId: string) : string {
    return this.draftDetailUrlPrefix + year + this.draftDetailUrlPostfix + memberId;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
