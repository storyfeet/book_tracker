import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Contributor , NewContributor } from '../data/author_data'; 

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
  getAuthors(filter:string,callback: (authors:Contributor[])=>void){
    this.http.get<Contributor[]>(
      `${BASE_URL}/authors`,
      {params: {filter:filter }}
    ).subscribe(callback);
  }

  addAuthor(author: NewContributor,callback: (author:Contributor)=>void){
    this.http.post<Contributor>(`${BASE_URL}/authors/add`,author,{}).subscribe(callback);
  }
}
