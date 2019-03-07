import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TemplatesModule } from './../templates/templates.module';
import { BoutonAddComponent } from './components/bouton-add/bouton-add.component';
import { TableauComponent } from './components/tableau/tableau.component';
import { StateDirective } from './directives/state.directive';
import { TotalPipe } from './pipes/total.pipe';

@NgModule({
  declarations: [TotalPipe, StateDirective, TableauComponent, BoutonAddComponent, BoutonAddComponent],
  exports: [TotalPipe, StateDirective, TableauComponent, BoutonAddComponent, RouterModule, TemplatesModule],
  imports: [
    CommonModule, RouterModule, TemplatesModule
  ]
})
export class SharedModule { }
