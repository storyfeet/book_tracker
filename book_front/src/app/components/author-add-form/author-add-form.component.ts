import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewAuthor ,Author} from '../../data/author_data';
import { AuthorService } from '../../services/author.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-author-add-form',
  imports: [FormsModule],
  templateUrl: './author-add-form.component.html',
  styleUrl: './author-add-form.component.scss'
})
export class AuthorAddFormComponent {
    author: NewAuthor = {FullName:'',Genres:'',Notes:''};
    private authorService:AuthorService;
    private router = inject(Router);
  
    constructor(){
      this.authorService = new AuthorService();
    }
  
    onSubmit(){
      console.log('New Author: ', this.author);
  
      this.authorService.addAuthor(this.author,
        (author:Author)=>{
          console.log('Author Upload Attempted');
          this.router.navigate([
            '/local/authors/view'],
            {queryParams:{author_name:author.FullName,author_id:author.Id}}
          )
        }
      );
    }
}
