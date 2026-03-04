import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Contributor , NewContributor ,Creation,Creations} from '../data/contribution_data'; 

const BASE_URL="http://localhost:5229";

@Injectable({
  providedIn: 'root'
})
export class ContributorService{
  private http = inject(HttpClient);
  constructor() { }

  /**
   * 
   * @param callback function(Book[]):null
   * @returns 
   */
  getAuthors(filter:string,callback: (authors:Contributor[])=>void){
    this.http.get<Contributor[]>(
      `${BASE_URL}/contributors`,
      {params: {filter:filter }}
    ).subscribe(callback);
  }

  addAuthor(author: NewContributor,callback: (author:Contributor)=>void){
    this.http.post<Contributor>(`${BASE_URL}/contributors/add`,author,{}).subscribe(callback);
  }

  selectContributor(contributorId: number, callback: (res:Creations)=>void){
    this.http.get<Creations>(`${BASE_URL}/contributors/contributor`,{params:{ContributorId:contributorId}}).subscribe(callback);
  }

  updateContributor(contributor:Contributor, callback:(contributor:Contributor)=>void){
    this.http.post<Contributor>(`${BASE_URL}/contributors/update`,contributor,{}).subscribe(callback);
  }
}
