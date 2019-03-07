import { fakeClients } from './fake-clients';
import { Client } from './../../shared/models/client.model';
import { Injectable } from '@angular/core';
import { StateClient } from 'src/app/shared/enums/state-client.enum';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private pCollection: Client[];

  constructor() {
    this.collection = fakeClients;
  }

  get collection(): Client[] {
    return this.pCollection;
  }

  set collection(col: Client[]) {
    this.pCollection = col;
  }

  update(item: Client, state: StateClient) {
    item.state = state;
  }
}
