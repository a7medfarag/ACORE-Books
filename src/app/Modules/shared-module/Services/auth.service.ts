import {Injectable} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  setToken(token) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }


  // To show or remove all components when user login or logout
  private isLoggedSubject:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  get isLoggedSubject$(): Observable<boolean> {
    return this.isLoggedSubject.asObservable();
  }
  updateData(data:boolean):void{
    this.isLoggedSubject.next(data);
  }
}
