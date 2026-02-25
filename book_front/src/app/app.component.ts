import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookComponent } from './book/book.component';
import { HttpClient ,HttpHandler} from '@angular/common/http';
import { BookListerService } from './services/book-lister.service';
import { Book } from '../data/book_data';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,BookComponent],
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
