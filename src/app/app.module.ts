import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { BooksModule } from '@app/books/books.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { LoadingComponent } from './shared/loading/loading.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, LoadingComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BooksModule,
    MatToolbarModule,
  ],
  exports: [LoadingComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
