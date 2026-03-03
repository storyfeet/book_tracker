import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewContributor ,Contributor} from '../../data/author_data';
import { ContributorService } from '../../services/contributor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-author-add-form',
  imports: [FormsModule],
  templateUrl: './contributor-add-form.component.html',
  styleUrl: './contributor-add-form.component.scss'
})
export class ContributorAddFormComponent {
    author: NewContributor = {FullName:'',Notes:''};
    private authorService:ContributorService;
    private router = inject(Router);
  
    constructor(){
      this.authorService = new ContributorService();
    }
  
    onSubmit(){
      console.log('New Author: ', this.author);
  
      this.authorService.addAuthor(this.author,
        (author:Contributor)=>{
          console.log('Author Upload Attempted');
          this.router.navigate([
            '/local/authors/view'],
            {queryParams:{author_name:author.FullName,author_id:author.Id}}
          )
        }
      );
    }
}
