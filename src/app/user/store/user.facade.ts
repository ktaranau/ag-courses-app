import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { requestCurrentUser } from "./user.actions";
import { UserState } from "./user.reducer";
import { getName, isAdmin } from "./user.selectors";

@Injectable()
export class UserFacade {

    constructor( private store: Store<UserState>) {}
    
    name$ = this.store.pipe(select(getName))

    isAdmin$ = this.store.pipe(select(isAdmin))

    getCurrentUser(): void {
        this.store.dispatch(requestCurrentUser())
    }

}