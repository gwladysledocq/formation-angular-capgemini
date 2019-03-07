import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../../services/clients.service';
import { Client } from './../../../shared/models/client.model';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.scss']
})
export class ListClientsComponent implements OnInit {

  collection: Client[];

  titreTableauClients: string[] = [
    'Nom',
    'E-mail',
    'State'
  ];

  constructor(private cs: ClientsService) { }

  ngOnInit() {
    this.collection = this.cs.collection;
  }

  update(obj) {
    this.cs.update(obj.client, obj.state);
  }

}
