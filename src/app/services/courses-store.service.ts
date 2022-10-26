import { Injectable } from '@angular/core';
import { BehaviorSubject, concatAll, forkJoin, map } from 'rxjs';
import { Course } from '../features/courses/interfaces/course';
import { AuthorsStoreService } from './authors-store.service';
import { CoursesService } from './courses.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesStoreService {

  private readonly courses$$ = new BehaviorSubject<Course[]>([]);
  private readonly isLoading$$ = new BehaviorSubject<boolean>(false);

  readonly courses$ = this.courses$$.asObservable();
  readonly isLoading$ = this.isLoading$$.asObservable();

  constructor(private coursesService: CoursesService, private authorsService: AuthorsStoreService) { }

  createCourse(course: Course) {
    return forkJoin(
      course.authors.map((name) => {
        return this.authorsService.addAuthor(name);
      })
    ).pipe(
      map((ids) => {
        return this.coursesService.createCourse(
          course.title,
          course.description,
          course.duration,
          ids
        );
      }),
      concatAll()
    );
  }

  editCourse(id: string, course: Course) {
    return forkJoin(
      course.authors.map((name) => {
        return this.authorsService.addAuthor(name);
      })
    ).pipe(
      map((ids) => {
        return this.coursesService.editCourse(id,
          course.title,
          course.description,
          course.duration,
          ids
        );
      }),
      concatAll()
    );
  }

  deleteCourse(id: string) {
    return this.coursesService.deleteCourse(id)
  }

  getCourse(id: string) {
    return this.coursesService.getCourse(id).pipe(map((course) => course));
  }

  getAllCourses() {
    return this.getCourses()
  }

  getCourses(): Course[] {
    this.isLoading$$.next(true)
    this.coursesService.getAll().subscribe(res => {
      this.isLoading$$.next(false);
      this.courses$$.next(res.result);
    })
    return this.courses$$.getValue();
  }

  private set courses(courses: Course[]) {
    this.courses$$.next(courses)
  }

}
