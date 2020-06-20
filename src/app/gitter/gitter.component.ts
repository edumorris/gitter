import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gitter',
  templateUrl: './gitter.component.html',
  styleUrls: ['./gitter.component.css']
})
export class GitterComponent implements OnInit {
  searchParam: string;
  searchData = [];
  searchUrl = "https://api.github.com/users/";
  token = "a84c1f0a1f6f01f6fac34e35f8ea92eab81845a1";
  searcher = this.searchUrl + this.searchParam + "?access_token=" + this.token;
  user: string;
  description: string;

submitSearch() {
  
 }

constructor(private http: HttpClient) {
  this.http.get(this.searcher).toPromise().then(data => {
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        this.searchData.push(data[key]);
      }
    }
  });

 }

ngOnInit(): void {
}

}
