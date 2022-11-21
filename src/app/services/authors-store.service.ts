import { Injectable } from '@angular/core';
import { UntypedFormBuilder } from '@angular/forms';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { AuthorsService } from './authors.service';
import { Author } from './interfaces/author';

@Injectable({
  providedIn: 'root'
})
export class AuthorsStoreService {

  private readonly authors$$ = new BehaviorSubject<Author[]>([]);
  private readonly isLoading$$ = new BehaviorSubject<boolean>(true);

  readonly authors$ = this.authors$$.asObservable();
  readonly isLoading$ = this.isLoading$$.asObservable();

  constructor(private authorsService: AuthorsService) { }

  get authors(): Author[] {
    this.isLoading$$.next(true)
    this.authorsService.getAll().subscribe(res => {
      this.isLoading$$.next(false);
      this.authors$$.next(res.result);
    })
    return this.authors$$.getValue();
  }

  private set authors(authors: Author[]) {
    this.authors$$.next(authors)
  }

  addAuthor(name: string): Observable<string> {
    return this.authorsService.addAuthor({name}).pipe(
      map((apiResponse) => {
        console.log("apiResponse", apiResponse)
        this.authors = [
                  ...this.authors,
                  { id: apiResponse.result.id, name }
                ]
        return apiResponse.result.id;
      })
    );
  }

}
