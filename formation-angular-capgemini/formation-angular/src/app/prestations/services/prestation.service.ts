import { Injectable } from '@angular/core';
import { State } from './../../shared/enums/state.enum';
import { Prestation } from './../../shared/models/prestation.model';
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

  update(item: Prestation) {
    console.log(`Appel bdd d\'update prestation ${item}`);
  }

  add(item: Prestation) {
    this.collection.push(new Prestation(item));
  }
}
