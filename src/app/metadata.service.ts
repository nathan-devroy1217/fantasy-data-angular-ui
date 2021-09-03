import { Observable, of } from 'rxjs';
import { Metadata } from './metadata';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MetadataService {

  private metadataUrl = 'https://ff-api-service-rbejey3lcq-uc.a.run.app/fantasy/v1/metadata/';

  constructor(
    private http: HttpClient
  ) { }

  getMetadata(selectedYear: string): Observable<Metadata> {
    console.log('RUNNING HTTP CALL FOR FANTASY METADATA');
    return this.http.get<Metadata>(this.metadataUrl + selectedYear)
    .pipe(
      catchError(this.handleError<Metadata>('getMetadata'))
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
