import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-book-tab-box',
  imports: [],
  templateUrl:'./book-tab-box.component.html',
  styleUrl: './book-tab-box.component.scss'
})
export class BookTabBoxComponent {
  mode:string = 'VIEW_BOOKS';
  private activatedRoute = inject(ActivatedRoute);
  private router = inject(Router);


  goto(newMode:string){
    this.router.navigate([newMode]);
  }

}
