import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ProfileCollectorService {
  private searchParam: string;
  private startUrl = "https://api.github.com/users/";
  private repoAdd = "/repos?access_token=";
  
  constructor(private http: HttpClient) {
    this.searchParam = "edumorris";
   }

  getProfile(searchParam: string) {
    return this.searchParam = searchParam;
  }

  userInfo() {
    interface ApiResponse { }
    let userProfileGet = this.startUrl + this.searchParam + "?access_token=" + environment.accessTokken;
    return this.http.get<ApiResponse>(userProfileGet);

  }

  repoInfo() {
    interface ApiResponse { }
    let userReposGet = this.startUrl + this.searchParam + this.repoAdd + environment.accessTokken;
    return this.http.get<ApiResponse>(userReposGet);
  }
}
