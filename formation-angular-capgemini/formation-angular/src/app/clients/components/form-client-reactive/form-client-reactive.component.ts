import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { Client } from './../../../shared/models/client.model';

@Component({
  selector: 'app-form-client-reactive',
  templateUrl: './form-client-reactive.component.html',
  styleUrls: ['./form-client-reactive.component.scss']
})
export class FormClientReactiveComponent implements OnInit {

  form: FormGroup;
  states = StateClient;
  private init = new Client();
  @Output() nItem: EventEmitter<Client> = new EventEmitter();

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      name: [
        this.init.name,
        Validators.compose([Validators.required, Validators.minLength(3)])],
      email:  [
        this.init.email,
        Validators.required],
      state:  [this.init.state]
    });
  }

  onSubmit() {
    this.nItem.emit(this.form.value);
  }

}
