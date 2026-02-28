import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookTabBoxComponent } from './components/book-tab-box/book-tab-box.component';
import { SideBarComponent } from "./components/side-bar/side-bar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SideBarComponent,BookTabBoxComponent, SideBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
