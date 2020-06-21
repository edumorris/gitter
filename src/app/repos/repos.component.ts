import { Component, OnInit, Input } from '@angular/core';
import { GitterComponent } from '../gitter/gitter.component'

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {

  @Input() repoData: any;
  constructor() { }

  ngOnInit(): void {
  }

}
