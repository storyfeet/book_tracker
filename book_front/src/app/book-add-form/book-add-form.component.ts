import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewBook } from '../../data/book_data';
import { BookListerService } from '../services/book-lister.service';

@Component({
  selector: 'app-book-add-form',
  imports: [FormsModule],
  templateUrl: './book-add-form.component.html',
  styleUrl: './book-add-form.component.scss'
})
export class BookAddFormComponent {
  book: NewBook = {Title:'',Link:''};
  private bookService:BookListerService;

  constructor(){
    this.bookService = new BookListerService();
  }

  onSubmit(){
    console.log('New Book: ', this.book);

    this.bookService.addBook(this.book,()=>{console.log('Book Upload Attempted')});
  }

}
