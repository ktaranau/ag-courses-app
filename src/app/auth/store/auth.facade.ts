import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { User } from "src/app/services/interfaces/user";
import { SessionStorageService } from "../services/session-storage.service";
import { requestLogin, requestLoginFail, requestLoginSuccess, requestRegister } from "./auth.actions";
import { AuthState } from "./auth.reducer";
import { isUserAuthorized } from "./auth.selectors";

@Injectable()
export class AuthStateFacade {

    constructor( private store: Store<AuthState>, private sessionStorage: SessionStorageService) {}

    isAuthorized$ = this.store.pipe(select(isUserAuthorized))
    
    login(email: string, password: string): void {
        console.log(email)
        this.store.dispatch(requestLogin({email: email, password: password}))
    }

    register(body: User): void {
        this.store.dispatch(requestRegister({name:body.name, email: body.email, password: body.password}))
    }

    logout(body: User): void {
        this.store.dispatch(requestLogin({email: body.email, password: body.password}))
    }

    closeSession(body: User): void {
        this.store.dispatch(requestLogin({email: body.email, password: body.password}))
    }

    requestLogoutSuccess(body: User): void {
        this.store.dispatch(requestLogin({email: body.email, password: body.password}))
    }

    setAuthorization(): void {
        const token = this.sessionStorage.getToken()
        if (token) {
            this.store.dispatch(requestLoginSuccess({ token: token}))
        } else this.store.dispatch(requestLoginFail({error: "You need to log in"}))
    }
}