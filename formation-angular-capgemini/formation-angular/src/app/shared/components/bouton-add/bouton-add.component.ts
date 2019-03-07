import { Component, Input, OnInit } from '@angular/core';
import { Links } from './../../interfaces/links';

@Component({
  selector: 'app-bouton-add',
  templateUrl: './bouton-add.component.html',
  styleUrls: ['./bouton-add.component.scss']
})
export class BoutonAddComponent implements OnInit {

  @Input() link: Links;

  constructor() { }

  ngOnInit() {
  }

}
