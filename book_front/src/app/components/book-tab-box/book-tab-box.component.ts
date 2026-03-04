import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-book-tab-box',
  imports: [FormsModule,CommonModule],
  templateUrl:'./book-tab-box.component.html',
  styleUrl: './book-tab-box.component.scss'
})
export class BookTabBoxComponent {
  private active = inject(ActivatedRoute);
  private router = inject(Router);

  top:string = '';
  bottom:string = '';

  constructor() {

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd){
        let parts = event.url.split(/[\/?]/gi);
        // Given: '/local/books/view?' books is part 2
        this.top = parts[2] ?? 'books';
        this.bottom = parts[3] ?? 'view';
      }
    });
  }

  



  setTop(newTop:string){
    this.top = newTop;
    this.bottom = 'view';
    this.go();
  }

  setBottom(newBottom:string){
    this.bottom = newBottom;
    this.go();
  }

  go(){
    this.router.navigate(['local',this.top,this.bottom]);
  }

}
