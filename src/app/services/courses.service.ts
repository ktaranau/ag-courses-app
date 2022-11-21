import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { SessionStorageService } from '../auth/services/session-storage.service';
import { Course } from '../features/courses/interfaces/course';
import { AuthorsStateFacade } from '../store/authors/authors.facade';
import { ApiResponse } from './interfaces/api-response';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient, private sessionStorage: SessionStorageService, private authorsFacade: AuthorsStateFacade) { }

  getAll(): Observable<ApiResponse<Course[]>> {
    return this.http.get<ApiResponse<Course[]>>("http://localhost:4000/courses/all")
  }

  // createCourse(course: Course): Observable<any> {
  //   console.log("creating course", course)
  //   // author ids
  //   course.authors.map((name) => {
  //     return this.authorsFacade.addAuthor(name)
  //   })
  //   return this.authorsFacade.addedAuthor$.pipe(map((authors) => {
  //     return this.http.post("http://localhost:4000/courses/add", { title: course.title, description: course.description, duration: course.duration, authors: authors })
  //   }))
  // }

  createCourse(course: Course): Observable<any> {
    
      return this.http.post("http://localhost:4000/courses/add", { title: course.title, description: course.description, duration: course.duration, authors: course.authors })
 
  }

  editCourse(course: Course): Observable<any> {
    return this.http.put(`http://localhost:4000/courses/${course.id}`, { title: course.title, description: course.description, duration: course.duration, authors: course.authors })
  }

  getCourse(id: string): Observable<any> {
    return this.http.get(`http://localhost:4000/courses/${id}`)
  }

  deleteCourse(id: string): Observable<ApiResponse<Course>> {
    return this.http.delete<ApiResponse<Course>>(`http://localhost:4000/courses/${id}`)
  }

}
