import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAddPrestationComponent } from './pages/page-add-prestation/page-add-prestation.component';
import { PageCommentPrestationComponent } from './pages/page-comment-prestation/page-comment-prestation.component';
import { PageDetailPrestationComponent } from './pages/page-detail-prestation/page-detail-prestation.component';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';

const appRoutes: Routes = [
  {
    path: '',
    component: PagePrestationsComponent,
    children: [
      { path: 'detail', component: PageDetailPrestationComponent },
      { path: 'comment', component: PageCommentPrestationComponent }
    ]
  },
  {
    path: 'add', component: PageAddPrestationComponent,
    data: { title: 'Prestations', label: 'Liste des prestaions' }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      appRoutes
    )
  ]
})
export class PrestationsRoutingModule { }
