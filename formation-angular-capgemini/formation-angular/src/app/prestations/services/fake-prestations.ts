import { Prestation } from './../../shared/models/prestation.model';

export const fakePrestations: Prestation[] = [
  new Prestation(
    {
      id: 'azerty',
      typePresta: 'formation',
      client: 'Nemesys',
      comment: 'Trop super commentaire',
      nbJours: 10
    }
  ),
  new Prestation(
    {
      id: 'hydtd',
      typePresta: 'developpement',
      client: 'Capgemini',
      comment: 'ça bosse dur',
      tjmHt: 3000,
      nbJours: 50
    }
  ),
];
