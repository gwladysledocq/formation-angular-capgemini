import { Component, Input, OnInit } from '@angular/core';
import { Links } from './../../interfaces/links';

@Component({
  selector: 'app-links-navigation',
  templateUrl: './links-navigation.component.html',
  styleUrls: ['./links-navigation.component.scss']
})
export class LinksNavigationComponent implements OnInit {

  @Input() listLinks: Links[];

  constructor() { }

  ngOnInit() {
  }

}
