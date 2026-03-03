import { Component, inject } from '@angular/core';
import { Book } from '../../data/book_data';
import { Contributor, BookContributions,Contribution } from '../../data/author_data';
import { FormsModule } from '@angular/forms';
import { BookService } from '../../services/book.service';
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
  contributions: Contribution[] = [];
  bookService: BookService;
  private activatedRoute = inject(ActivatedRoute);

  constructor(){
    this.book = null;
    this.bookId = this.activatedRoute.snapshot.queryParams['book_id'] ?? null;
    this.bookService = new BookService();
    this.selectBook();
  }

  selectBook(){
    if (this.bookId === null){
      return;
    }
    let parent = this;
    this.bookService.getBook(this.bookId,(data:BookContributions)=>{
      parent.book = data.book;
      parent.contributions = data.contributions;
      console.log("Book Collected",data);
    });
  }

  addAuthor(author:Contributor){
    if (!this.bookId){
      return;
    }
    let parent = this;
    this.bookService.assignAuthor(this.bookId,author.Id,()=>{  
      parent.selectBook();
     });

  }


}
