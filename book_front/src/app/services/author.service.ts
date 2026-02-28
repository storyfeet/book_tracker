import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Author , NewAuthor } from '../data/author_data'; 

const BASE_URL="http://localhost:5229";

@Injectable({
  providedIn: 'root'
})
export class AuthorService{
  private http = inject(HttpClient);
  constructor() { }

  /**
   * 
   * @param callback function(Book[]):null
   * @returns 
   */
  getAuthors(callback: (authors:Author[])=>void){
    this.http.get<Author[]>(`${BASE_URL}/authors`).subscribe(callback);
  }

  addAuthor(author: NewAuthor,callback: ()=>void){
    this.http.post<NewAuthor>(`${BASE_URL}/authors/add`,author,{}).subscribe(callback);
  }
}
