import { Prestation } from './../../shared/models/prestation.model';
import { Injectable } from '@angular/core';
import { fakePrestations } from './fake-prestations';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {

  private pCollection: Prestation[];

  constructor() {
    this.collection = fakePrestations;
  }

  get collection(): Prestation[] {
    return this.pCollection;
  }

  set collection(col: Prestation[]) {
    this.pCollection = col;
  }
}
