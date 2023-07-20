import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable()

export class PublicService {
  constructor(private http: HttpClient) { }


  handleError(error: HttpErrorResponse) {
    console.log(error);
    const msg = 'Error status code: ' + error.status + ', status: ' + error.statusText;
    // Utiliza un factory function para crear el error al momento de ser emitido.
    return throwError(() => new Error(msg));
  }
}
