import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AppRoutingModule } from 'src/app/app-routing/app-routing.module';
import { CoursesRoutingModule } from 'src/app/app-routing/courses-routing/courses-routing.module';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorizedGuard implements CanLoad {

  constructor(private authService: AuthService, private router: Router) { }

  canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      console.log("redirecting to login")
      return this.router.parseUrl('/login')
    }

  }

}
