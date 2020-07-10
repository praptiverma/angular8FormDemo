import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { User } from './user';
import {throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  url='http://localhost:3000/enrol';
  constructor(private http:HttpClient) { }
  enrol(user:User)
  {
      return this.http.post<any>(this.url,user)
      .pipe(catchError(this.errorHandler)); 

  }

  errorHandler(error :HttpErrorResponse)
  {
    return throwError(error);
  }
}
