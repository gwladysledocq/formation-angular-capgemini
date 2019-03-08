import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Links } from './../../../shared/interfaces/links';
import { Prestation } from './../../../shared/models/prestation.model';
import { PrestationService } from './../../services/prestation.service';

@Component({
  selector: 'app-list-prestations',
  templateUrl: './list-prestations.component.html',
  styleUrls: ['./list-prestations.component.scss']
})
export class ListPrestationsComponent implements OnInit, OnDestroy {

  collection$: Observable<Prestation[]>;
  // private sub: Subscription;
  page = 1;
  maxSize = 5;
  pageSize = 2;

  titreTableauPrestations: string[] = [
    'Type',
    'Client',
    'Durée',
    'Tjm HT',
    'Total HT',
    'Total TTC',
    'State'
  ];

  link: Links  = {
    route: 'add',
    label: 'Ajouter prestation'
  };

  constructor(private ps: PrestationService) { }

  ngOnInit() {
    this.collection$ = this.ps.collection$;
    // this.sub = this.ps.collection$.subscribe((data) => {
    //   this.collection = data;
    // });
  }

  update(presta: Prestation) {
    this.ps.update(presta).then((data) => {
      // traitement
    });
    // Pour http, subscribe au lieu de then
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }

  selectItem(presta: Prestation) {
    this.ps.presta$.next(presta);
  }

}
