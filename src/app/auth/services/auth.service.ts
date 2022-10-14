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
    console.log(!!this.sessionStorage.getToken())
    return !!this.sessionStorage.getToken();
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post("http://localhost:4000/login", {
      email,
      password
    })
  }

  //   this.http.post<LoginResponse>("http://localhost:4000/login", user)
  //     // .pipe(
  //     //   catchError(this.handleError)
  //     // )
  //     .subscribe(data => {
  //       if (data.successful) {
  //         let token = data.result.split(' ')[1]
  //         this.sessionStorage.setToken(token)
  //       }
  //     })
  // }

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

  // register(user: UserDTO) {
  //   this.http.post<LoginResponse>("http://localhost:4000/register", user)
  //     // .pipe(
  //     //   catchError(this.handleError)
  //     // )
  //     .subscribe(data => {
  //       if (data.successful) {
  //         let token = data.result.split(' ')[1]
  //         this.sessionStorage.setToken(token)
  //       }
  //     })
  // }

  // private handleError(error: HttpErrorResponse) {
  //   if (error.status === 0) {
  //     // A client-side or network error occurred. Handle it accordingly.
  //     console.error('An error occurred:', error.error);
  //   } else {
  //     // The backend returned an unsuccessful response code.
  //     // The response body may contain clues as to what went wrong.
  //     console.error(
  //       `Backend returned code ${error.status}, body was: `, error.error);
  //   }
  //   // Return an observable with a user-facing error message.
  //   return throwError(() => new Error('Something bad happened; please try again later.'));
  // }

}
