import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { of } from 'rxjs';
import { map, catchError, mergeMap, tap } from 'rxjs/operators';
import { requestAllCourses, requestAllCoursesFail, requestAllCoursesSuccess, requestCreateCourse, requestCreateCourseFail, requestCreateCourseSuccess, requestDeleteCourse, requestDeleteCourseFail, requestEditCourse, requestEditCourseFail, requestEditCourseSuccess, requestSingleCourse, requestSingleCourseFail, requestSingleCourseSuccess, } from './courses.actions';
import { Router } from '@angular/router';
import { CoursesService } from 'src/app/services/courses.service';

@Injectable()
export class CoursesEffects {
    constructor(
        private actions$: Actions,
        private coursesService: CoursesService,
        private router: Router,
    ) { }

    getAll$ = createEffect(() =>
        this.actions$.pipe(
            ofType(requestAllCourses),
            mergeMap(() => this.coursesService.getAll()
                .pipe(
                    map(res => (requestAllCoursesSuccess({ courses: res.result }))),
                    catchError((res) => of(requestAllCoursesFail(res.message)))
                )
            )
        ),
        { useEffectsErrorHandler: false }
    )

    getSpecificCourse$ = createEffect(() =>
        this.actions$.pipe(
            ofType(requestSingleCourse),
            mergeMap((action) => this.coursesService.getCourse(action.id)
                .pipe(
                    map(res => (requestAllCourses())),
                    catchError((res) => of(requestDeleteCourseFail(res.result)))
                )
            )
        ),
        { useEffectsErrorHandler: false }
    )

    deleteCourse$ = createEffect(() =>
        this.actions$.pipe(
            ofType(requestDeleteCourse),
            mergeMap((action) => this.coursesService.deleteCourse(action.id)
                .pipe(
                    map(res => (requestSingleCourseSuccess({ course: res.result }))),
                    catchError((res) => of(requestSingleCourseFail(res.result)))
                )
            )
        ),
        { useEffectsErrorHandler: false }
    )

    editCourse$ = createEffect(() =>
        this.actions$.pipe(
            ofType(requestEditCourse),
            mergeMap((action) => this.coursesService.editCourse(action.id, action.title, action.description, action.duration, action.authors)
                .pipe(
                    map(res => (requestEditCourseSuccess({ editedCourse: res.result }))),
                    catchError((res) => of(requestEditCourseFail(res.result)))
                )
            )
        ),
        { useEffectsErrorHandler: false }
    )

    createCourse$ = createEffect(() =>
        this.actions$.pipe(
            ofType(requestCreateCourse),
            mergeMap((action) => this.coursesService.createCourse(action.title, action.description, action.duration, action.authors)
                .pipe(
                    map(res => (requestCreateCourseSuccess({ addedCourse: res.result }))),
                    catchError((res) => of(requestCreateCourseFail(res.result)))
                )
            )
        ),
        { useEffectsErrorHandler: false }
    )

    redirectToTheCoursesPage$ = createEffect(() =>
        this.actions$.pipe(
            ofType(requestCreateCourseSuccess, requestEditCourseSuccess, requestSingleCourseFail ),
            tap(
                () => {                    
                    this.router.navigateByUrl("/courses")
                }
            )
        ),
        { useEffectsErrorHandler: false, dispatch: false }
    )

}