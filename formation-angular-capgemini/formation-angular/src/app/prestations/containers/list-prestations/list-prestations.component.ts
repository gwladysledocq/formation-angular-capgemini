import { Prestation } from './../../../shared/models/prestation.model';
import { PrestationService } from './../../services/prestation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-prestations',
  templateUrl: './list-prestations.component.html',
  styleUrls: ['./list-prestations.component.scss']
})
export class ListPrestationsComponent implements OnInit {

  collection: Prestation[];

  constructor(private ps: PrestationService) { }

  ngOnInit() {
    this.collection = this.ps.collection;
  }

}
