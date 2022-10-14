
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

const TOKEN: string = "token"
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  private TOKEN: string = "token"
  // private window: Window;

  private isAuthorized$$: BehaviorSubject<boolean>
  public isAuthorized$: Observable<boolean>

  logout(): void {
    window.sessionStorage.clear();
  }

  constructor() {    
  }

  setToken(token: string): void {
    console.log(token)
    window.sessionStorage.removeItem(TOKEN)
    window.sessionStorage.setItem(TOKEN, token)
  }

  getToken() {
    return window.sessionStorage.getItem(TOKEN)
  }

  deleteToken() {
    window.sessionStorage.removeItem(TOKEN)
  }
  
  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }

    return {};
  }

}
