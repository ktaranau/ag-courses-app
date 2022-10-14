import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SessionStorageService } from '../auth/services/session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient, private sessionStorage: SessionStorageService) { }

  getAll() {
    return this.http.get("http://localhost:4000/courses/all")
  }

  createCourse(title: string, description: string, duration: number, authors: string[]) {
    return this.http.post("http://localhost:4000/courses/add", { title, description, duration, authors })
  }

  editCourse(data: any, id: string) {
    return this.http.put(`http://localhost:4000/courses/${id}`, data)
  }

  getCourse(id: string) {
    return this.http.get(`http://localhost:4000/courses/${id}`)
   }

  deleteCourse(id: string) {
    return this.http.delete(`http://localhost:4000/courses/${id}`)
   }


}
