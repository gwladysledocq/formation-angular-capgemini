import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { State } from 'src/app/shared/enums/state.enum';
import { Prestation } from './../../../shared/models/prestation.model';

@Component({
  selector: 'app-form-prestation',
  templateUrl: './form-prestation.component.html',
  styleUrls: ['./form-prestation.component.scss']
})
export class FormPrestationComponent implements OnInit {

  states = State;
  init = new Prestation();
  @Output() nItem: EventEmitter<Prestation> = new EventEmitter();

constructor() { }

ngOnInit() {
  }

onSubmit() {
    this.nItem.emit(this.init);
  }

}
