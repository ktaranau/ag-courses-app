import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { UserDTO } from '../interfaces/user-dto';
import { SessionStorageService } from './session-storage.service';
import { LoginResponse } from '../interfaces/login-response';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'authorization': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthorized = false;

  constructor(private http: HttpClient, private sessionStorage: SessionStorageService) { }

  isLoggedIn() {    
    return !!this.sessionStorage.getToken();
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post("http://localhost:4000/login", {
      email,
      password
    })
  }

  logout() {
    this.sessionStorage.deleteToken()
    window.sessionStorage.clear();
    return this.http.delete("http://localhost:4000/logout")
  }

  register(name: string, email: string, password: string): Observable<any> {
    return this.http.post("http://localhost:4000/register", {
      name,
      email,
      password
    })
  }

}
