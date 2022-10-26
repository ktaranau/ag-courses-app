import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/services/auth.service';
import { SessionStorageService } from './auth/services/session-storage.service';
import { UserStoreService } from './user/services/user-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

  title = 'courses-app';

  constructor(private sessionStorage: SessionStorageService, private router: Router, private userService: UserStoreService, private authService: AuthService) { }

  isLoginFailed = false;

  logout(): void {
    this.authService.logout().subscribe(
      (data) => {        
        console.log("logout data", data),
        this.isLoggedIn = false;
        this.sessionStorage.deleteToken()
        window.sessionStorage.clear();
        this.router.navigateByUrl("/login")
      },
      err => {
        window.sessionStorage.clear();
        this.router.navigateByUrl("/login")
        console.log("err", err)
      }
    )
  }


  ngOnInit(): void {
    this.userService.getUser()
    // this.isLoggedIn = !!this.sessionService.getToken();

    // if (this.isLoggedIn) {
    //   const user = this.sessionService.getUser();
    //   this.roles = user.roles;

    //   // this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
    //   // this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

    //   this.username = user.username;
    // }
  }

}
