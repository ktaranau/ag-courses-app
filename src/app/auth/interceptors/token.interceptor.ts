import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
  HttpResponse
} from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { SessionStorageService } from '../services/session-storage.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private tokenService: SessionStorageService, private authService: AuthService, private router: Router) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let authReq = request;
    const token = this.tokenService.getToken();
    if (token != null) {
      authReq = request.clone({
        headers: request.headers.set("Authorization", 'Bearer ' + token)
      })
    }
    return next.handle(authReq).pipe(map((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        if (event.status === 401) {
          this.authService.logout();
          this.router.navigateByUrl('/login');
        }
      }
      return event;
    }));

  }

}

export const authInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
]