import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageNotFoundRoutingModule } from './page-not-found-routing.module';
import { PagePageNotFoundComponent } from './pages/page-page-not-found/page-page-not-found.component';

@NgModule({
  declarations: [PagePageNotFoundComponent],
  imports: [
    PageNotFoundRoutingModule
  ]
})
export class PageNotFoundModule { }
