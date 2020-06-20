import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileCollectorService {
  private searchParam: string;

  getProfile(searchParam: string) {
    return this.searchParam = searchParam;
  }

  constructor() { }
}
