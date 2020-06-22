import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ProfileCollectorService {
  private searchParam: string;
  private startUrl = "https://api.github.com/users/";
  private repoAdd = "/repos?access_token=";
  private aTokken = "a84c1f0a1f6f01f6fac34e35f8ea92eab81845a1";

  constructor(private http: HttpClient) {
    this.searchParam = "edumorris";
  }

  getProfile(searchParam: string) {
    return this.searchParam = searchParam;
  }

  userInfo() {
    interface ApiResponse { }
    /*
    Build not working if access token is in environment.ts
    let userProfileGet = this.startUrl + this.searchParam + "?access_token=" + environment.accessTokken;
    */
    let userProfileGet = this.startUrl + this.searchParam + "?access_token=" + this.aTokken
    return this.http.get<ApiResponse>(userProfileGet);

  }

  repoInfo() {
    interface ApiResponse { }
    /*
    Build not working if access token is in environment.ts
    let userReposGet = this.startUrl + this.searchParam + this.repoAdd + environment.accessTokken;
    */
    let userReposGet = this.startUrl + this.searchParam + this.repoAdd + this.aTokken;
    return this.http.get<ApiResponse>(userReposGet);
  }
}
