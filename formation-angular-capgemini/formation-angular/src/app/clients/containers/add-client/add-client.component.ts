import { Client } from './../../../shared/models/client.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {

  constructor(
    private cs: ClientsService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  add(item: Client) {
    this.cs.add(item);
    this.router.navigate(['clients']);
  }

}
