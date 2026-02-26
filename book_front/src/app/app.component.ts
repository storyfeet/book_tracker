import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookComponent } from './book/book.component';
import { BookListerService } from './services/book-lister.service';
import { Book } from '../data/book_data';
import { BookAddFormComponent } from "./book-add-form/book-add-form.component";
import { BookTabBoxComponent } from './book-tab-box/book-tab-box.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BookComponent, BookAddFormComponent, BookTabBoxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'book_front';
  books:Book[] = [];

  constructor(){ 
    this.loadBooks();
  }

  async loadBooks(){

    new BookListerService().getBooks((books)=>this.books = books);

  }
}
