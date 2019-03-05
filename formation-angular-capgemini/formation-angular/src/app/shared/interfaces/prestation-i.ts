import { State } from './../enums/state.enum';

export interface PrestationI {
  id: string;
  typePresta: string;
  client: string;
  tjmHt: number;
  nbJours: number;
  tauxTva: number;
  comment: string;
  state: State;
  totalHT(): number;
  totalTTC(): number;
}
