import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { State } from 'src/app/shared/enums/state.enum';
import { Prestation } from 'src/app/shared/models/prestation.model';

@Component({
  selector: 'app-item-prestation',
  templateUrl: './item-prestation.component.html',
  styleUrls: ['./item-prestation.component.scss']
})
export class ItemPrestationComponent implements OnInit {

  @Input() item: Prestation;
  @Output() newState: EventEmitter<Prestation> = new EventEmitter();
  @Output() selectedPrestation: EventEmitter<Prestation> = new EventEmitter();
  states = State;

  constructor() { }

  ngOnInit() {
  }

  changeState() {
    this.newState.emit(this.item);
  }

  selectItem() {
    this.selectedPrestation.emit(this.item);
  }

}
