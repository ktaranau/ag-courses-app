import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {

  private readonly name$$ = new BehaviorSubject<string>("");
  private readonly isAdmin$$ = new BehaviorSubject<boolean>(false);

  readonly name$ = this.name$$.asObservable();
  readonly isAdmin$ = this.isAdmin$$.asObservable();

  constructor(private userService: UserService) { }

  getUser() {
    this.userService.getUser().subscribe((data) => {
      this.name$$.next(data.result.name);
      (data.result.role == "admin") ? this.isAdmin$$.next(true) : this.isAdmin$$.next(false);
    })
  }

}
