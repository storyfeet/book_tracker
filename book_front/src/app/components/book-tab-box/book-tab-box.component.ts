import { Component, inject } from '@angular/core';
import { BookAddFormComponent } from '../book-add-form/book-add-form.component';
import { BookListComponent } from "../book-list/book-list.component"; 
import { AuthorAddFormComponent } from '../author-add-form/author-add-form.component';
import { AuthorListComponent } from '../author-list/author-list.component';
import { BookEditComponent } from '../book-edit/book-edit.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-tab-box',
  imports: [BookAddFormComponent, BookListComponent, AuthorAddFormComponent,AuthorListComponent,BookEditComponent],
  templateUrl:'./book-tab-box.component.html',
  styleUrl: './book-tab-box.component.scss'
})
export class BookTabBoxComponent {
  mode:string = 'VIEW_BOOKS';
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);

  constructor(router:Router){
    this.setRoute();
    router.events.subscribe(()=>this.setRoute());
  }

  setRoute(){
    let snapshot = this.activatedRoute.snapshot;

    switch (snapshot.routeConfig?.path){
      case 'local/books/edit':
        this.mode = 'EDIT_BOOK';
        break;
      case 'local/authors/view':
        this.mode = 'VIEW_AUTHORS';
        break;
      default: 
        this.mode = 'VIEW_BOOKS';
    }
  }


  select(newMode:string){
    this.mode = newMode
  }

}
