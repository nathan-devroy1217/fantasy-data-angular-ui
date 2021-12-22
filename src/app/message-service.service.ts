import { MessageModelComposite } from './messageModelComposite';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {

  private messageServiceUrl : String = 'https://ff-api-service-rbejey3lcq-uc.a.run.app/admin/v1/messages/get?messageType=';

  constructor(
    private http: HttpClient) {}

    getMessageModalDetail(element: string): Observable<MessageModelComposite> {
      console.log('RUNNING HTTP CALL FOR MESSAGE MODEL DETAIL');
      return this.http.get<MessageModelComposite>(this.messageServiceUrl + element)
      .pipe(
        catchError(this.handleError<MessageModelComposite>('getMessageModalDetail'))
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
