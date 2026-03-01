import { Component } from '@angular/core';
import { BookTabBoxComponent } from '../book-tab-box/book-tab-box.component';
import { SideBarComponent } from '../side-bar/side-bar.component';

@Component({
  selector: 'app-home-page',
  imports: [BookTabBoxComponent,SideBarComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
