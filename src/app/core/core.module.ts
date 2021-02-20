import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BooksService } from './books.service';

@NgModule({
  declarations: [BooksService],
  imports: [CommonModule, HttpClientModule],
})
export class CoreModule {}
