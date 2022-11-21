import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { requestAddAuthor, requestAddAuthorSuccess, requestAuthors, requestAuthorsFail, requestAuthorsSuccess } from './authors.actions';
import { Router } from '@angular/router';
import { AuthorsService } from 'src/app/services/authors.service';

@Injectable()
export class AuthorsEffects {
    constructor(
        private actions$: Actions,
        private authorsService: AuthorsService,
        private router: Router,
    ) { }

    getAuthors$ = createEffect(() =>
        this.actions$.pipe(
            ofType(requestAuthors),
            mergeMap(() => this.authorsService.getAll()
                .pipe(
                    map(res => (console.log(res), requestAuthorsSuccess({ authors: res.result as any }))),
                    catchError((res) => of(requestAuthorsFail()))
                )
            )
        ),
        { useEffectsErrorHandler: false }
    )

    addAuthor$ = createEffect(() =>
        this.actions$.pipe(
            ofType(requestAddAuthor),
            mergeMap((action) => this.authorsService.addAuthor({name: action.name})
                .pipe(
                    map(res => (requestAddAuthorSuccess({ author: res.result }))),
                    catchError((res) => of(requestAuthorsFail()))
                )
            )
        ),
        { useEffectsErrorHandler: false }
    )

}