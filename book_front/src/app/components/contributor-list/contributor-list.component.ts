import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Contributor } from '../../data/contribution_data';
import { AuthorViewComponent } from '../author-view/author-view.component';
import { ContributorService } from '../../services/contributor.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-author-list',
  imports: [AuthorViewComponent,FormsModule],
  templateUrl: './contributor-list.component.html',
  styleUrl: './contributor-list.component.scss'
})
export class ContributorListComponent {
  filter: string;
  authors: Contributor[] = [];
  @Input() selectText:string|null = null;
  @Input() isSub: boolean|null = null;
  @Output() selectAuthor = new EventEmitter<Contributor>(); 
  private authorService:ContributorService;
  private activatedRoute = inject(ActivatedRoute);
  constructor(){
    this.filter = this.activatedRoute.snapshot.queryParams['author_name'] ?? '';
    this.authorService = new ContributorService();
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
