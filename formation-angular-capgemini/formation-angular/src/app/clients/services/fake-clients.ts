import { StateClient } from './../../shared/enums/state-client.enum';
import { Client } from './../../shared/models/client.model';

export const fakeClients: Client[] = [
  new Client(
    {
      id: 'id1',
      name: 'Bérengère',
      email: 'berengere@hotmail.fr',
      state: StateClient.INACTIF
    }
  ),
  new Client(
    {
      id: 'id2',
      name: 'Roger',
      email: 'roger@yahoo.com',
      state: StateClient.ACTIF
    }
  )
];
