import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { AuthStateFacade } from '../store/auth.facade';
import { isUserAuthorized } from '../store/auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthorizedGuard implements CanLoad {

  constructor(private authService: AuthService, private router: Router, private authFacade: AuthStateFacade) { }

  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    return this.authFacade.isAuthorized$.pipe(map((isUserAuthorized) => {
      if (isUserAuthorized) {
        return true
      }
      return this.router.parseUrl('/login')
    }))
  }

}
