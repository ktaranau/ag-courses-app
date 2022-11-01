import { createFeatureSelector, createSelector } from "@ngrx/store";
import { coursesFeatureName, CoursesState } from "./courses.reducer";

export const getCoursesFeatureState = createFeatureSelector<CoursesState>(coursesFeatureName);

export const isAllCoursesLoadingSelector = createSelector(
    getCoursesFeatureState,
    (state: CoursesState) => state.isAllCoursesLoading
);

export const isSearchingStateSelector = createSelector(
    getCoursesFeatureState,
    (state: CoursesState) => state.isSearchState
);

export const isSingleCourseLoadingSelector = createSelector(
    getCoursesFeatureState,
    (state: CoursesState) => state.isSingleCourseLoading
);

export const getCourses = createSelector(
    getCoursesFeatureState,
    (state: CoursesState) => state.courses
);

export const getAllCourses = createSelector(
    getCoursesFeatureState,
    (state: CoursesState) => state.allCourses
);

export const getCourse = createSelector(
    getCoursesFeatureState,
    (state: CoursesState) => state.course
);

export const getErrorMessage = createSelector(
    getCoursesFeatureState,
    (state: CoursesState) => state.errorMessage
);
