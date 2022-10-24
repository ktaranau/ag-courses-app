import { Component } from '@angular/core';
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

  constructor(private sessionService: SessionStorageService, private userService: UserStoreService) { }

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
