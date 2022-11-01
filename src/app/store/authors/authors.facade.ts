import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Author } from "src/app/services/interfaces/author";
import { User } from "src/app/services/interfaces/user";
import { requestAddAuthor, requestAuthors } from "./authors.actions";
import { AuthorsState } from "./authors.reducer";
import { getAddedAuthors, getAuthors } from "./authors.selectors";

@Injectable()
export class AuthorsStateFacade {

    constructor( private store: Store<AuthorsState>) {}

    addedAuthor$ = this.store.pipe(select(getAddedAuthors))

    authors$ = this.store.pipe(select(getAuthors))
    
    getAuthors(): void {        
        this.store.dispatch(requestAuthors())
    }

    addAuthor(newName: string): void {
        this.store.dispatch(requestAddAuthor({name: newName}))
    }

}