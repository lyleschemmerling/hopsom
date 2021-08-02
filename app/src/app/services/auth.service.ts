import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject(false);

  constructor() { }

  isLoggedIn(): Observable<boolean> {
    return this.loggedIn;
  }

  setLoggedIn(loggedIn: boolean): void {
    this.loggedIn.next(loggedIn);
  }
}
