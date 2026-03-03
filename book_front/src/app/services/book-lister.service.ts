import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Book } from '../data/book_data';
import { NewBook } from '../data/book_data';
import { Contributor ,BookContributions} from '../data/author_data';

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
  getBooks(filter:string,callback: (books:Book[])=>void){
    this.http.get<Book[]>(`${BASE_URL}/books`,{
      params: {filter:filter},
    }).subscribe(callback);
  }

  getBook(bookId:number, callback: (ba:BookContributions)=>void){
    this.http.get<BookContributions>(`${BASE_URL}/books/book`,{
      params:{BookId: bookId},
    }).subscribe(callback);
  }

  addBook(book: NewBook,callback: (book:Book)=>void){
    this.http.post<Book>(`${BASE_URL}/books/add`,book,{}).subscribe(callback);
  }

  assignAuthor(bookId:number, authorId: number,callback:()=>void){
    this.http.post(`${BASE_URL}/books/assign_author`,{bookId:bookId,authorId:authorId},{})
      .subscribe(callback);
  }
}
