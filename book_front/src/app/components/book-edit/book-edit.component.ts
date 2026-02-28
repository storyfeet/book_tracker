import { Component } from '@angular/core';
import { Book } from '../../data/book_data';
import { Author, BookAuthor } from '../../data/author_data';
import { FormsModule } from '@angular/forms';
import { BookListerService } from '../../services/book-lister.service';
import { AuthorViewComponent } from '../author-view/author-view.component';
import { AuthorListComponent } from "../author-list/author-list.component";

@Component({
  selector: 'app-book-edit',
  imports: [FormsModule, AuthorViewComponent, AuthorListComponent],
  templateUrl: './book-edit.component.html',
  styleUrl: './book-edit.component.scss'
})
export class BookEditComponent {
  bookId: number | null;
  book: Book | null;
  authors: Author[] = [];
  bookService: BookListerService;

  constructor(){
    this.book = null;
    this.bookId = null;
    this.bookService = new BookListerService();
  }

  selectBook(){
    if (this.bookId === null){
      return;
    }
    this.bookService.getBook(this.bookId,(data:BookAuthor)=>{
      this.book = data.book;
      this.authors = data.authors;
    });
  }

  addAuthor(author:Author){
    if (!this.bookId){
      return;
    }
    this.bookService.assignAuthor(this.bookId,author.Id,()=>{
      
    });
  }


}
