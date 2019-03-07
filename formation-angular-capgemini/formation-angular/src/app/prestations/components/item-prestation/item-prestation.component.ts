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
  @Output() newState: EventEmitter<{presta: Prestation, state: State}> = new EventEmitter();
  states = State;

  constructor() { }

  ngOnInit() {
  }

  changeState(event) {
    const etat = event.target.value;
    this.newState.emit({ presta: this.item, state: etat});
  }

}
