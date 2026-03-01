import { Component, inject } from '@angular/core';
import { Book } from '../../data/book_data';
import { Author, BookAuthor } from '../../data/author_data';
import { FormsModule } from '@angular/forms';
import { BookListerService } from '../../services/book-lister.service';
import { AuthorListComponent } from "../author-list/author-list.component";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-edit',
  imports: [FormsModule, AuthorListComponent],
  templateUrl: './book-edit.component.html',
  styleUrl: './book-edit.component.scss'
})
export class BookEditComponent {
  bookId: number | null;
  book: Book | null;
  authors: Author[] = [];
  bookService: BookListerService;
  private activatedRoute = inject(ActivatedRoute);

  constructor(){
    this.book = null;
    this.bookId = this.activatedRoute.snapshot.queryParams['book_id'] ?? null;
    this.bookService = new BookListerService();
    this.selectBook();
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
    let parent = this;
    this.bookService.assignAuthor(this.bookId,author.Id,()=>{  
      parent.selectBook();
     });

  }


}
