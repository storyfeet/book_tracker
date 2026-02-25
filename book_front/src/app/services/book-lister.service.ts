import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Book } from '../../data/book_data';

@Injectable({
  providedIn: 'root'
})
export class BookListerService {
  private http = inject(HttpClient);
  constructor() { }

  /**
   * 
   * @param callback function(Book[]):null
   * @returns 
   */
  getBooks(callback: (books:Book[])=>void){
    this.http.get<Book[]>("http://localhost:5229/books").subscribe(callback);

  }
}
