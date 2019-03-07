import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StateClient } from './../../../shared/enums/state-client.enum';
import { Client } from './../../../shared/models/client.model';

@Component({
  selector: 'app-item-client',
  templateUrl: './item-client.component.html',
  styleUrls: ['./item-client.component.scss']
})
export class ItemClientComponent implements OnInit {

  @Input() item: Client;
  @Output() newState: EventEmitter<{client: Client, state: StateClient}> = new EventEmitter();
  states = StateClient;

  constructor() { }

  ngOnInit() {
  }

  changeState(event) {
    const etat = event.target.value;
    this.newState.emit({ client: this.item, state: etat});
  }

}
