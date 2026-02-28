import { Component,Input } from '@angular/core';
import { Book } from '../../data/book_data';

@Component({
  selector: 'app-book',
  imports: [],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
})
export class BookComponent {
  @Input() book!:Book;
}
