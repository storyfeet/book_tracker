import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewAuthor } from '../../data/author_data';
import { AuthorService } from '../../services/author.service';

@Component({
  selector: 'app-author-add-form',
  imports: [FormsModule],
  templateUrl: './author-add-form.component.html',
  styleUrl: './author-add-form.component.scss'
})
export class AuthorAddFormComponent {
    book: NewAuthor = {FullName:'',Genres:'',Notes:''};
    private authorService:AuthorService;
  
    constructor(){
      this.authorService = new AuthorService();
    }
  
    onSubmit(){
      console.log('New Author: ', this.book);
  
      this.authorService.addAuthor(this.book,
        ()=>{
          console.log('Author Upload Attempted');
        }
      );
    }
}
