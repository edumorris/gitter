import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProfileCollectorService } from '../profile-collector.service';


@Component({
  selector: 'app-gitter',
  templateUrl: './gitter.component.html',
  styleUrls: ['./gitter.component.css']
})

export class GitterComponent implements OnInit {
  searchParam: string;
  infoData: any;
  repoData: any;
  user: string;


  submitSearch() {
    this.profileCollector.getProfile(this.searchParam);
    this.profileCollector.userInfo().toPromise().then(infoData => this.infoData = infoData);
    this.profileCollector.repoInfo().toPromise().then(repoData => this.repoData = repoData);
  }


  constructor(private profileCollector: ProfileCollectorService) {
    this.profileCollector.getProfile(this.searchParam);
    this.profileCollector.userInfo().toPromise().then(infoData => this.infoData = infoData);
    this.profileCollector.repoInfo().toPromise().then(repoData => this.repoData = repoData);
  }

  ngOnInit() {
    this.profileCollector.getProfile("edumorris");
    this.profileCollector.userInfo().toPromise().then(infoData => this.infoData = infoData);
    this.profileCollector.repoInfo().toPromise().then(repoData => this.repoData = repoData);
  }

}
