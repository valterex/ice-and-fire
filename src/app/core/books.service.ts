import { Injectable } from '@angular/core';

import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { Book } from '../books/book.model';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  booksUrl = 'https://www.anapioficeandfire.com/api/books';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl, this.httpOptions).pipe(
      map((res: any) => {
        const booksWithIds = res.map((el) => {
          const obj = { ...el, id: el.url.slice(-1) };
          return obj;
        });

        return booksWithIds;
      }),
      catchError(this.handleError)
    );
  }

  getBook(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.booksUrl}/${id}`, this.httpOptions);
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }

    return throwError('Something bad happened; please try again later.');
  }
}
