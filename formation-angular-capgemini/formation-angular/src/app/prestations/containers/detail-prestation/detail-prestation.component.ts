import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Prestation } from './../../../shared/models/prestation.model';
import { PrestationService } from './../../services/prestation.service';

@Component({
  selector: 'app-detail-prestation',
  templateUrl: './detail-prestation.component.html',
  styleUrls: ['./detail-prestation.component.scss']
})
export class DetailPrestationComponent implements OnInit {

  presta$: Subject<Prestation>;

  constructor(
    private ps: PrestationService
  ) { }

  ngOnInit() {
    this.presta$ = this.ps.presta$;
  }

}
