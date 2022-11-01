import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { last, map, Observable, tap } from 'rxjs';
import { UserStoreService } from 'src/app/user/services/user-store.service';
import { UserFacade } from 'src/app/user/store/user.facade';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private router: Router,
    private userFacade: UserFacade
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.userFacade.isAdmin$.pipe(map((isAdmin) => {
      if (!isAdmin) {
        return this.router.parseUrl("/courses")
      }
      return isAdmin;
    }))
  }
}
