import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

import { BooksRoutingModule } from '@app/books/books-routing.module';

import { BooksComponent } from '@app/books/books.component';
import { BookListComponent } from '@app/books/components/book-list/book-list.component';
import { BookComponent } from '@app/books/components/book/book.component';
import { BookLayoutComponent } from './components/book-layout/book-layout.component';

@NgModule({
  declarations: [
    BooksComponent,
    BookListComponent,
    BookComponent,
    BookLayoutComponent,
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  exports: [BooksComponent],
})
export class BooksModule {}
