import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


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

  constructor(){
    console.log('TAB-PATH:',this.active.snapshot.pathFromRoot);
  }

  setTop(newTop:string){
    this.top = newTop;
    this.setBottom('view');
  }

  setBottom(newBottom:string){
    this.bottom = newBottom;
    this.go();
  }

  go(){
    this.router.navigate(['local',this.top,this.bottom]);
  }

}
