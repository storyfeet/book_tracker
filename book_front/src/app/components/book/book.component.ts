import { Component,Input } from '@angular/core';
import { Book } from '../../data/book_data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-book',
  imports: [RouterLink],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
})
export class BookComponent {
  @Input() book!:Book;
}
