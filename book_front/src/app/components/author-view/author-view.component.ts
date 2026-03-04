import { Component,Input } from '@angular/core';
import { Contributor } from '../../data/contribution_data';

@Component({
  selector: 'app-author-view',
  imports: [],
  templateUrl: './author-view.component.html',
  styleUrl: './author-view.component.scss'
})
export class AuthorViewComponent {
  @Input() author!: Contributor;
}
