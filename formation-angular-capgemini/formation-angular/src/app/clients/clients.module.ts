import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { ClientsRoutingModule } from './clients-routing.module';
import { FormClientReactiveComponent } from './components/form-client-reactive/form-client-reactive.component';
import { ItemClientComponent } from './components/item-client/item-client.component';
import { AddClientComponent } from './containers/add-client/add-client.component';
import { ListClientsComponent } from './containers/list-clients/list-clients.component';
import { PageAddClientComponent } from './pages/page-add-client/page-add-client.component';
import { PageClientsComponent } from './pages/page-clients/page-clients.component';

@NgModule({
  declarations: [PageClientsComponent, ListClientsComponent, ItemClientComponent, AddClientComponent, PageAddClientComponent, FormClientReactiveComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ClientsModule { }
