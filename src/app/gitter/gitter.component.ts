import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProfileCollectorService } from '../profile-collector.service';
import { Users } from '../users';


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

@Output() repoOut = new EventEmitter<any>();

repoSender() {
  this.repoOut.emit(this.repoData);
}

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
