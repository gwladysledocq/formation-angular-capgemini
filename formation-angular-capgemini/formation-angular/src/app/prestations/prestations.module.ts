import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './../shared/shared.module';
import { FormPrestationReactiveComponent } from './components/form-prestation-reactive/form-prestation-reactive.component';
import { FormPrestationComponent } from './components/form-prestation/form-prestation.component';
import { ItemPrestationComponent } from './components/item-prestation/item-prestation.component';
import { AddPrestationComponent } from './containers/add-prestation/add-prestation.component';
import { ListPrestationsComponent } from './containers/list-prestations/list-prestations.component';
import { PageAddPrestationComponent } from './pages/page-add-prestation/page-add-prestation.component';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';
import { PrestationsRoutingModule } from './prestations-routing.module';
import { PageDetailPrestationComponent } from './pages/page-detail-prestation/page-detail-prestation.component';
import { PageCommentPrestationComponent } from './pages/page-comment-prestation/page-comment-prestation.component';
import { DetailPrestationComponent } from './containers/detail-prestation/detail-prestation.component';
import { CommentPrestationComponent } from './containers/comment-prestation/comment-prestation.component';

@NgModule({
  declarations: [PagePrestationsComponent, ListPrestationsComponent, ItemPrestationComponent,
    FormPrestationComponent, AddPrestationComponent, PageAddPrestationComponent, FormPrestationReactiveComponent, PageDetailPrestationComponent, PageCommentPrestationComponent, DetailPrestationComponent, CommentPrestationComponent],
  imports: [
    CommonModule,
    PrestationsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgbPaginationModule
  ]
})
export class PrestationsModule { }
