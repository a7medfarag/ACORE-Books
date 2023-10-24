import { Injectable } from '@angular/core';
import { BaseUrl, Categories, GetBooks, Versions } from '../../shared-module/Constnats/app-apis-constants';
import { HttpClient } from '@angular/common/http';
import { IBooks, ICategory, IData, IVersions } from '../../shared-module/models/interfaces';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  baseUrl = BaseUrl;
  constructor(private http:HttpClient) {}

  getAllBooks(): Observable<IData<IBooks>>{
    let url = `${this.baseUrl}${GetBooks}`;
    return this.http.get<IData<IBooks>>(url).pipe(catchError((err)=>throwError(err)));
  }
  getCategories(): Observable<ICategory>{
    let url = `${this.baseUrl}${Categories}`;
    return this.http.get<ICategory>(url).pipe(catchError((err)=>throwError(err)));
  }
  getVersions(): Observable<IVersions>{
    let url = `${this.baseUrl}${Versions}`;
    return this.http.get<IVersions>(url).pipe(catchError((err)=>throwError(err)));
  }
}
