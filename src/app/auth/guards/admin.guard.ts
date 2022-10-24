import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { last, map, Observable, tap } from 'rxjs';
import { UserStoreService } from 'src/app/user/services/user-store.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private userService: UserStoreService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.userService.isAdmin$.pipe( map((isAdmin) => {
      if (!isAdmin){
        return this.router.parseUrl("/")
      }
      return isAdmin;
    }))
  }
}
