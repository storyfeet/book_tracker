import { Component, EventEmitter, inject, Input ,Output, SimpleChanges} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewBook,Book } from '../../data/book_data';
import { BookService } from '../../services/book.service';
import { Router } from '@angular/router';
import { OnChanges } from '@angular/core';

@Component({
  selector: 'app-book-edit-details',
  imports: [FormsModule],
  templateUrl: './book-add-form.component.html',
  styleUrl: './book-add-form.component.scss'
})
export class BookEditDetailsComponent {
  @Input() outerBook!: Book;
  @Output() updated: EventEmitter<Book> = new EventEmitter();
  private bookService:BookService;
  book:Book;


  constructor(){
    this.bookService = new BookService();
    this.book = {...this.outerBook};
  }
  
  ngOnChanges(changes:SimpleChanges){
    this.book = {...this.outerBook};
  }

  onSubmit(){
    console.log('Edit Book: ', this.book);

    let outer = this;
    this.bookService.editBook(
      this.book,
      (bookRes:Book)=>{
        console.log('Book Created', bookRes);
        outer.updated.emit(bookRes);
      });

  }

}
