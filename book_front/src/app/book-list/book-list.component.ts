import { Component } from '@angular/core';
import { Book } from '../../data/book_data';
import { BookComponent } from '../book/book.component';
import { BookListerService } from '../services/book-lister.service';

@Component({
  selector: 'app-book-list',
  imports: [BookComponent],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent {
  books: Book[] = [];
  private bookService:BookListerService;
  constructor(){
    this.bookService = new BookListerService();
    this.loadBooks();
  }

  async loadBooks(){
    this.bookService.getBooks((books)=>this.books = books);
  }
}
