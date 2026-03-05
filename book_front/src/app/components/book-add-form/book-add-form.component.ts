import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewBook,Book } from '../../data/book_data';
import { BookService } from '../../services/book.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-add-form',
  imports: [FormsModule],
  templateUrl: './book-add-form.component.html',
  styleUrl: './book-add-form.component.scss'
})
export class BookAddFormComponent {
  book: NewBook = {Title:'',ISBN:'',Notes:'',Genres:''};
  private bookService:BookService;
  private router:Router = inject(Router);

  constructor(){
    this.bookService = new BookService();
  }

  onSubmit(){
    console.log('New Book: ', this.book);

    let outer = this;
    this.bookService.addBook(
      this.book,
      (bookRes:Book)=>{
        console.log('Book Created', bookRes);
        outer.router.navigate(['/local/books/edit'],{
          queryParams:{book_id:bookRes.Id}
        });
      }
    );
  }


  action(){
    return 'New Book';
  }

}
