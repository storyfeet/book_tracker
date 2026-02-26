import { Component } from '@angular/core';
import { BookAddFormComponent } from '../book-add-form/book-add-form.component';
import { BookListComponent } from "../book-list/book-list.component"; 

@Component({
  selector: 'app-book-tab-box',
  imports: [BookAddFormComponent, BookListComponent],
  templateUrl:'./book-tab-box.component.html',
  styleUrl: './book-tab-box.component.scss'
})
export class BookTabBoxComponent {
  mode:string = 'VIEW_BOOKS';


  select(newMode:string){
    this.mode = newMode
  }

}
