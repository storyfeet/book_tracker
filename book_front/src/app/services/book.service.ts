import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Book } from '../data/book_data';
import { NewBook } from '../data/book_data';
import { BookContributions, NewContribution} from '../data/author_data';

const BASE_URL="http://localhost:5229";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private http = inject(HttpClient);
  constructor() { }

  /**
   * 
   * @param callback function(Book[]):null
   * @returns 
   */
  getBooks(filter:string,callback: (books:Book[])=>void){
    this.http.get<Book[]>(`${BASE_URL}/books`,{
      params: {filter:filter},
    }).subscribe(callback);
  }

  getBook(bookId:number, callback: (ba:BookContributions)=>void){
    this.http.get<BookContributions>(`${BASE_URL}/books/book`,{
      params:{BookId: bookId},
    }).subscribe({
      next: callback,
      error: (err)=>console.log("ERROR: ",err)
    });
  }

  addBook(book: NewBook,callback: (book:Book)=>void){
    this.http.post<Book>(`${BASE_URL}/books/add`,book,{}).subscribe(callback);
  }

  editBook(book:Book,callback: (book:Book)=>void){
    this.http.post<Book>(`${BASE_URL}/books/edit_details`,book,{}).subscribe(callback);
  }

  addContribution(contribution:NewContribution,callback:()=>void){
    this.http.post(`${BASE_URL}/books/add_contribution`,contribution,{})
      .subscribe(callback);
  }
}
