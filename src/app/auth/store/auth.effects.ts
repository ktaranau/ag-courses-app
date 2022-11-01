import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { of, from } from 'rxjs';
import { switchMap, map, catchError, withLatestFrom, mergeMap, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AuthService } from '../services/auth.service';
import { requestLogin, requestLoginFail, requestLoginSuccess } from './auth.actions';
import { Router } from '@angular/router';
import { SessionStorageService } from '../services/session-storage.service';

@Injectable()
export class AuthEffects {
    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private router: Router,
        private sessionStorage: SessionStorageService
    ) { }

    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(requestLogin),
            mergeMap((action) => this.authService.login(action.email, action.password)
                .pipe(
                    map(res => (requestLoginSuccess({ token: res.result }))),
                    catchError((res) => of(requestLoginFail({ error: res.message })))
                )
            )
        ),
        { useEffectsErrorHandler: false }
    )

    loginSuccess$ = createEffect(() =>
        this.actions$.pipe(
            ofType(requestLoginSuccess), 
            tap(
                (action) => {
                    this.sessionStorage.setToken(action.token)
                    this.router.navigateByUrl("/courses")
                }
            )
            
        ),
        { useEffectsErrorHandler: false, dispatch: false }
    )

}