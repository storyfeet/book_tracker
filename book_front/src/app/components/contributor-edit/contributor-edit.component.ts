import { Component, inject } from '@angular/core';
import { Contributor, Creations ,Creation} from '../../data/contribution_data';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ContributorService } from '../../services/contributor.service';

@Component({
  selector: 'app-book-edit',
  imports: [FormsModule,],
  templateUrl: './contributor-edit.component.html',
  styleUrl: './contributor-edit.component.scss'
})
export class ContributorEditComponent {
  contributorId: number | null;
  contributor: Contributor | null;
  creations: Creation[] = [];
  addContributor : string | null = null;
  contributorService: ContributorService;
  editMode: boolean;
  private activatedRoute = inject(ActivatedRoute);

  constructor(){
    this.contributor = null;
    this.editMode = false;
    this.contributorId = this.activatedRoute.snapshot.queryParams['contributor_id'] ?? null;
    this.contributorService = new ContributorService();
    this.selectContributor();
  }

  selectContributor(){
    if (this.contributorId === null){
      return;
    }
    let parent = this;
    this.contributorService.selectContributor(this.contributorId,(data:Creations)=>{
      parent.creations = data.Creations;
      parent.contributor = data.Contributor;
      console.log("Contributor Collected",data);
    });
  }

  filterCreations(kind:string){
    return this.creations.filter((c)=>c.ContributionKind == kind);
  }

  updateContributor(contributor:Contributor){
    this.contributorService.updateContributor(contributor,(result)=>{
      this.editMode = false;
      this.contributor = result;
      this.contributorId = result.Id;
    });
  }


}