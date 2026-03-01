import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewBook,Book } from '../../data/book_data';
import { BookListerService } from '../../services/book-lister.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-add-form',
  imports: [FormsModule],
  templateUrl: './book-add-form.component.html',
  styleUrl: './book-add-form.component.scss'
})
export class BookAddFormComponent {
  book: NewBook = {Title:'',ISBN:'',Notes:''};
  private bookService:BookListerService;
  private router:Router = inject(Router);

  constructor(){
    this.bookService = new BookListerService();
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

}
