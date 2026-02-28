import { Component } from '@angular/core';
import { Author } from '../../data/author_data';
import { AuthorViewComponent } from '../author-view/author-view.component';
import { AuthorService } from '../../services/author.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-author-list',
  imports: [AuthorViewComponent,FormsModule],
  templateUrl: './author-list.component.html',
  styleUrl: './author-list.component.scss'
})
export class AuthorListComponent {
  filter: string;
  authors: Author[] = [];
  private authorService:AuthorService;
  constructor(){
    this.filter = '';
    this.authorService = new AuthorService();
    this.loadBooks();
  }

  async loadBooks(){
    this.authorService.getAuthors(this.filter,(authors)=>this.authors = authors);
  }
}
