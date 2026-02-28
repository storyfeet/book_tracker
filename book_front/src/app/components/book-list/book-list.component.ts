import { Component } from '@angular/core';
import { Book } from '../../data/book_data';
import { BookComponent } from '../book/book.component';
import { BookListerService } from '../../services/book-lister.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-book-list',
  imports: [BookComponent,FormsModule],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent {
  filter: string;
  books: Book[] = [];
  private bookService:BookListerService;
  constructor(){
    this.filter = '';
    this.bookService = new BookListerService();
    this.loadBooks();
  }

  async loadBooks(){
    this.bookService.getBooks(this.filter,(books)=>this.books = books);
  }
}
