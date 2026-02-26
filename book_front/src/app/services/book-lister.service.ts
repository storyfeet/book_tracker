import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Book } from '../../data/book_data';
import { NewBook } from '../../data/book_data';

const BASE_URL="http://localhost:5229";

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
    this.http.get<Book[]>(`${BASE_URL}/books`).subscribe(callback);
  }

  addBook(book: NewBook,callback: ()=>void){
    this.http.post<NewBook>(`${BASE_URL}/books/add`,book,{}).subscribe(callback);
  }
}
