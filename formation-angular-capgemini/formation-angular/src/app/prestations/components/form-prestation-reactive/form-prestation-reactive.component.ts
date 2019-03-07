import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { State } from './../../../shared/enums/state.enum';

@Component({
  selector: 'app-form-prestation-reactive',
  templateUrl: './form-prestation-reactive.component.html',
  styleUrls: ['./form-prestation-reactive.component.scss']
})
export class FormPrestationReactiveComponent implements OnInit {

  form: FormGroup;
  states = State;
  private init = new Prestation();
  @Output() nItem: EventEmitter<Prestation> = new EventEmitter();

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      typePresta: [
        this.init.typePresta,
        Validators.required],
      client:  [
        this.init.client,
        Validators.compose([Validators.required, Validators.minLength(3)])],
      tjmHt:  [this.init.tjmHt],
      nbJours:  [this.init.nbJours],
      tauxTva:  [this.init.tauxTva],
      comment:  [this.init.comment],
      state:  [this.init.state]
    });
  }

  onSubmit() {
    this.nItem.emit(this.form.value);
  }

}
