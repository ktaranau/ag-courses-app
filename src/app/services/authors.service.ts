import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SessionStorageService } from '../auth/services/session-storage.service';
import { ApiResponse } from './interfaces/api-response';
import { Author } from './interfaces/author';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private http: HttpClient, private sessionStorage: SessionStorageService) { }

  getAll(): Observable<ApiResponse<Author[]>> {
    return this.http.get<ApiResponse<Author[]>>("http://localhost:4000/authors/all")
  }

  addAuthor(data: {name: string}): Observable<ApiResponse<Author>> {
    return this.http.post<ApiResponse<Author>>(
      'http://localhost:4000/authors/add',
      data
    );
  }

}
