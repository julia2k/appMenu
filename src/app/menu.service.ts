import { Component, OnInit } from '@angular/core';
import { Injectable, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { IMenu } from './IMenu';
import { catchError, tap} from 'rxjs/operators';
@Injectable({
    providedIn: 'root'
})
export class MenuService {
  menu: IMenu[];
  menuNew: any;
  private MenuUrl = 'https://api.myjson.com/bins/129e7f';
  constructor(
       private http: HttpClient
    ) { }
    getMenu(): Observable<IMenu[]>{
     return  this.http.get<IMenu[]>(this.MenuUrl).pipe(
          tap(data=>console.log("All: " + JSON.stringify(data))),
          catchError(this.handleError)
     );
     
      }
      private handleError(err: HttpErrorResponse){
          let errorMessage='';
          if (err.error instanceof ErrorEvent){
            errorMessage=`An arror occurred: ${err.error.message}`;
          } else{
            errorMessage=`Server returned code: ${err.status}, error message is: ${err.message}`;
          }
          console.log(errorMessage);
          return throwError(errorMessage);
        }
}