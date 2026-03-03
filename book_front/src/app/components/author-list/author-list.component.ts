import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Contributor } from '../../data/author_data';
import { AuthorViewComponent } from '../author-view/author-view.component';
import { AuthorService } from '../../services/author.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-author-list',
  imports: [AuthorViewComponent,FormsModule],
  templateUrl: './author-list.component.html',
  styleUrl: './author-list.component.scss'
})
export class AuthorListComponent {
  filter: string;
  authors: Contributor[] = [];
  @Input() selectText:string|null = null;
  @Output() selectAuthor = new EventEmitter<Contributor>(); 
  private authorService:AuthorService;
  private activatedRoute = inject(ActivatedRoute);
  constructor(){
    this.filter = this.activatedRoute.snapshot.queryParams['author_name'] ?? '';
    this.authorService = new AuthorService();
    if (this.filter){
      this.loadBooks();
    }
  }

  async loadBooks(){
    this.authorService.getAuthors(this.filter,(authors)=>this.authors = authors);
  }

  select(author:Contributor){
    this.selectAuthor.emit(author);
  }
}
