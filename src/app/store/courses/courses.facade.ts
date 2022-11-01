import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { CoursesState } from "src/app/store/courses/courses.reducer";
import { requestAllCourses, requestCreateCourse, requestDeleteCourse, requestEditCourse, requestSingleCourse } from "./courses.actions";
import { isAllCoursesLoadingSelector, isSearchingStateSelector, isSingleCourseLoadingSelector, getCourse, getAllCourses, getCourses, getErrorMessage } from "./courses.selectors";

@Injectable()
export class CoursesStateFacade {

    constructor(private store: Store<CoursesState>) { }

    isAllCoursesLoading$ = this.store.pipe(select(isAllCoursesLoadingSelector))

    isSingleCOurseLoading$ = this.store.pipe(select(isSingleCourseLoadingSelector))

    isSearchingState$ = this.store.pipe(select(isSearchingStateSelector))

    courses$ = this.store.pipe(select(getCourses))

    allCourses$ = this.store.pipe(select(getAllCourses))

    course$ = this.store.pipe(select(getCourse))

    errorMessage$ = this.store.pipe(select(getErrorMessage))

    getAllCourses(): void {
        this.store.dispatch(requestAllCourses())
    }

    getSingleCourse(id: string): void {
        this.store.dispatch(requestSingleCourse({ id: id }))
    }

    getFilteredCourses(searchValue: string): void {
        this.store.dispatch(requestAllCourses())
    }

    editCourse(id: string, title: string, description: string, duration: number, authors: string[]): void {
        this.store.dispatch(requestEditCourse({ id, title, description, duration, authors }))
    }

    createCourse(title: string, description: string, duration: number, authors: string[]): void {
        this.store.dispatch(requestCreateCourse({ title, description, duration, authors }))
    }

    deleteCourse(id: string): void {
        this.store.dispatch(requestDeleteCourse({ id: id }))
    }

}