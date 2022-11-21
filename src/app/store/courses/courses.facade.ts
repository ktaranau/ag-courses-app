import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { Course } from "src/app/features/courses/interfaces/course";
import { CoursesState } from "src/app/store/courses/courses.reducer";
import { resetAddedAuthor } from "../authors/authors.actions";
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
        this.store.dispatch(requestSingleCourse({ id }))
    }

    getFilteredCourses(searchValue: string): void {
        this.store.dispatch(requestAllCourses())
    }

    editCourse(course: Course): void {
        this.store.dispatch(requestEditCourse({course}))
    }

    createCourse(course: Course): void {
        this.store.dispatch(resetAddedAuthor())        
        this.store.dispatch(requestCreateCourse({course}))
    }

    deleteCourse(id: string): void {
        this.store.dispatch(requestDeleteCourse({ id: id }))
    }

}