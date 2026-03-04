import { Component, inject } from '@angular/core';
import { Book } from '../../data/book_data';
import { Contributor, BookContributions,Contribution, NewContribution } from '../../data/author_data';
import { FormsModule } from '@angular/forms';
import { BookService } from '../../services/book.service';
import { ContributorListComponent } from "../contributor-list/contributor-list.component";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-edit',
  imports: [FormsModule, ContributorListComponent],
  templateUrl: './book-edit.component.html',
  styleUrl: './book-edit.component.scss'
})
export class BookEditComponent {
  bookId: number | null;
  book: Book | null;
  contributions: Contribution[] = [];
  addContributor : string | null = null;
  bookService: BookService;
  private activatedRoute = inject(ActivatedRoute);

  constructor(){
    this.book = null;
    this.bookId = this.activatedRoute.snapshot.queryParams['book_id'] ?? null;
    this.bookService = new BookService();
    this.selectBook();
  }

  selectBook(){
    if (this.bookId === null){
      return;
    }
    let parent = this;
    this.bookService.getBook(this.bookId,(data:BookContributions)=>{
      parent.book = data.book;
      parent.contributions = data.contributions;
      console.log("Book Collected",data);
    });
  }

  filterContributions(kind:string){
    return this.contributions.filter((c)=>c.Kind == kind);
  }

  addAuthor(contributor:Contributor){
    if (!this.bookId || ! this.addContributor){
      return;
    }
    let contribution: NewContribution= {
      ContributorId :contributor.Id,
      BookId: this.bookId,
      Kind: this.addContributor,
    }
    let parent = this;
    this.bookService.addContribution(contribution,()=>{  
      parent.selectBook();
      parent.addContributor = null;
    });

  }


}
