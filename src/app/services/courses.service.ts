import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SessionStorageService } from '../auth/services/session-storage.service';
import { Course } from '../features/courses/interfaces/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient, private sessionStorage: SessionStorageService) { }

  getAll(): Observable<any> {
    return this.http.get("http://localhost:4000/courses/all")        
      }

  createCourse( title: string, description: string, duration: number, authors: string[]): Observable<any> {
    console.log("Inside create course authors", authors)
    return this.http.post("http://localhost:4000/courses/add", { title , description, duration, authors })
  }

  editCourse(id: string, title: string, description: string, duration: number, authors: string[] ) {
    return this.http.put(`http://localhost:4000/courses/${id}`, { title , description, duration, authors })
  }

  getCourse(id: string): Observable<any> {
    console.log("inside service", id)
    return this.http.get(`http://localhost:4000/courses/${id}`)
   }

  deleteCourse(id: string) {
    return this.http.delete(`http://localhost:4000/courses/${id}`)
   }

}
