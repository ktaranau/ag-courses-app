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
    let admin = false;
    this.userFacade.isAdmin$.subscribe(((isAdmin) => {
      console.log("is admin", isAdmin)
      admin = isAdmin
    }))

    if (!admin) {
      console.log(admin)
      return this.router.parseUrl("/courses")
    }
    return admin;

  }

}
