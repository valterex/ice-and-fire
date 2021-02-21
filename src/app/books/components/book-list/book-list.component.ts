import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Book } from '@app/books/models/book.model';
import { BooksService } from '@app/books/services/books.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnInit, AfterViewInit {
  books: Book[];
  isLoading = true;

  displayedColumns: string[] = [
    'name',
    'released',
    'publisher',
    'numberOfPages',
    'isbn',
  ];

  dataSource: MatTableDataSource<Book>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private booksService: BooksService) {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.books);
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getBooks(): void {
    this.booksService.getBooks().subscribe((books) => {
      this.books = books;
      this.dataSource.data = this.books;
      this.isLoading = false;
    });
  }

  ngOnInit(): void {
    this.getBooks();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
