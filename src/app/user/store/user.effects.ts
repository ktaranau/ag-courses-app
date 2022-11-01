import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { of, from } from 'rxjs';
import { switchMap, map, catchError, withLatestFrom, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { UserService } from '../services/user.service';
import { requestCurrentUser, requestCurrentUserFail, requestCurrentUserSuccess } from './user.actions';

@Injectable()
export class UserEffects {
    constructor(
        private actions$: Actions,
        private userService: UserService
    ) { }

    getCurrentUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(requestCurrentUser),
            switchMap(() => this.userService.getUser()
                .pipe(
                    map(res => (requestCurrentUserSuccess({ isAdmin: (res.result.role == "admin"), name: res.result.name }))),
                    catchError((res) => of(requestCurrentUserFail({ error: res.message })))
                )
            )
        ),
    )

    getUserFail$ = createEffect(() =>
    this.actions$.pipe(
        ofType(requestCurrentUserFail),
        tap( 
            (action) => {
                console.log("action", action)
            }
        )
    ),
    { useEffectsErrorHandler: false, dispatch: false }

)


}