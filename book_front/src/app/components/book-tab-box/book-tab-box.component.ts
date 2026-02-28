import { Component } from '@angular/core';
import { BookAddFormComponent } from '../book-add-form/book-add-form.component';
import { BookListComponent } from "../book-list/book-list.component"; 
import { AuthorAddFormComponent } from '../author-add-form/author-add-form.component';
import { AuthorListComponent } from '../author-list/author-list.component';
import { BookEditComponent } from '../book-edit/book-edit.component';

@Component({
  selector: 'app-book-tab-box',
  imports: [BookAddFormComponent, BookListComponent, AuthorAddFormComponent,AuthorListComponent,BookEditComponent],
  templateUrl:'./book-tab-box.component.html',
  styleUrl: './book-tab-box.component.scss'
})
export class BookTabBoxComponent {
  mode:string = 'VIEW_BOOKS';


  select(newMode:string){
    this.mode = newMode
  }

}
