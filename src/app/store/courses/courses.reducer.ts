import { Action, createReducer, on } from "@ngrx/store";
import { Course } from "src/app/features/courses/interfaces/course";
import { Author } from "src/app/services/interfaces/author";
import * as coursesAction from './courses.actions';

export const coursesFeatureName = 'courses';

export const coursesFeatureKey = {
    storeFeatureName: "courses"
};

export interface CoursesState {
    allCourses: Course[],
    courses: Course[],
    course: Course,
    isAllCoursesLoading: boolean,
    isSingleCourseLoading: boolean,
    isSearchState: boolean,
    errorMessage: string
}

export const initialCoursesState: CoursesState = {
    allCourses: [] as Course[],
    courses: [] as Course[],
    course: {} as Course,
    isAllCoursesLoading: false,
    isSingleCourseLoading: false,
    isSearchState: false,
    errorMessage: ""
};

export const reducer = createReducer(
    initialCoursesState,
    on(coursesAction.requestAllCourses, (coursesState, { }) => {
        return {
            ...coursesState,
            isAllCoursesLoading: true
        };
    }),
    on(coursesAction.requestAllCoursesSuccess, (coursesState, { courses }) => {
        return {
            ...coursesState,
            authors: courses,
            isAllCoursesLoading: false
        }
    }),
    on(coursesAction.requestAllCoursesFail, (coursesState, { error }) => {
        return {
            ...coursesState,
            errorMessage: error[0],
            isAllCoursesLoading: false

        }
    }),
    on(coursesAction.requestSingleCourse, (coursesState, { }) => {
        return {
            ...coursesState,
            isSingleCourseLoading: true
        }
    }),
    on(coursesAction.requestSingleCourseSuccess, (coursesState, { course }) => {
        return {
            ...coursesState,            
            course: course,
            isSingleCourseLoading: false
        }
    }),
    on(coursesAction.requestSingleCourseFail, (coursesState, { error }) => {
        return {
            ...coursesState,
            errorMessage: error,
            isSingleCourseLoading: false
        }
    }),
    on(coursesAction.requestFilteredCourses, (coursesState, { }) => {
        return {
            ...coursesState,
            isSearchState: true,            
        }
    }),
    on(coursesAction.requestFilteredCoursesSuccess, (coursesState, { courses }) => {
        return {
            ...coursesState,
            courses: courses
        }
    }),
    on(coursesAction.requestDeleteCourse, (coursesState, { }) => {
        return {
            ...coursesState,            
        }
    }),
    on(coursesAction.requestDeleteCourseFail, (coursesState, { error }) => {
        return {
            ...coursesState,
            errorMessage: error
        }
    }),
    on(coursesAction.requestEditCourse, (coursesState, { }) => {
        return {
            ...coursesState,            
        }
    }),
    on(coursesAction.requestEditCourseSuccess, (coursesState, { editedCourse }) => {
        return {
            ...coursesState,
            course: editedCourse
        }
    }),
    on(coursesAction.requestEditCourseFail, (coursesState, { error }) => {
        return {
            ...coursesState,
            errorMessage: error
        }
    }),
    on(coursesAction.requestCreateCourse, (coursesState, { }) => {
        return {
            ...coursesState,
        }
    }),
    on(coursesAction.requestCreateCourseSuccess, (coursesState, { addedCourse }) => {
        return {
            ...coursesState,
            course: addedCourse
        }
    }),
    on(coursesAction.requestCreateCourseFail, (coursesState, { error }) => {
        return {
            ...coursesState,
            errorMessage: error
        }
    })
);

export const coursesReducer = (state: CoursesState, action: Action): CoursesState => reducer(state, action);