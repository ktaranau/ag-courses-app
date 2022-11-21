import { createAction, props } from "@ngrx/store";
import { Course } from "src/app/features/courses/interfaces/course";

export const requestAllCourses = createAction(
    '[Courses API] Request All Courses',    
  );
  
  export const requestAllCoursesSuccess = createAction(
    '[Courses API] Request All Courses Success',
    props<{ courses: Course[] }>()
  );
  
  export const requestAllCoursesFail = createAction(
    '[Courses API] Request All Courses Fail',
    props<{ error: string[] }>()

  );

  export const requestSingleCourse = createAction(
    '[Courses API] Request Single Course',
    props<{ id: string }>()
  );
  
  export const requestSingleCourseSuccess = createAction(
    '[Courses API] Request Single Course Success',
    props<{ course: Course }>()
  );
  
  export const requestSingleCourseFail = createAction(
    '[Courses API] Request Single Course Fail',
    props<{ error: string }>()
  );

  export const requestFilteredCourses = createAction(
    '[Courses API] Request Filter Courses',
    props<{ error: string }>()
  );

  export const requestFilteredCoursesSuccess = createAction(
    '[Courses API] Request Filter Courses Success',
    props<{ courses: Course[] }>()
  );

  export const requestDeleteCourse = createAction(
    '[Courses API] Request Delete Course',
    props<{ id: string }>()
  );

  export const requestDeleteCourseFail = createAction(
    '[Courses API] Request Delete Course Fail',
    props<{ error: string }>()
  );


  export const requestDeleteCourseSuccess = createAction(
    '[Courses API] Request Delete Course Success',
    props<{ error: string }>()
  );

  export const requestEditCourse = createAction(
    '[Courses API] Request Edit Course',
    props<{ course: Course }>()
  );

  export const requestEditCourseSuccess = createAction(
    '[Courses API] Request Edit Course Success',
    props<{ editedCourse: Course }>()
  );

  export const requestEditCourseFail = createAction(
    '[Courses API] Request Edit Course Fail',
    props<{ error: string }>()
  );

  export const requestCreateCourse = createAction(
    '[Courses API] Request Create Course',
    props<{ course: Course }>()
  );

  export const requestCreateCourseSuccess = createAction(
    '[Courses API] Request Create Course Success',
    props<{ addedCourse: Course }>()
  );

  export const requestCreateCourseFail = createAction(
    '[Courses API] Request Create Course Fail',
    props<{ error: string }>()
  );