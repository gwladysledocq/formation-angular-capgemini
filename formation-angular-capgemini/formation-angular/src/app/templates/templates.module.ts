import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateBComponent } from './template-b/template-b.component';
import { TemplateAComponent } from './template-a/template-a.component';

@NgModule({
  declarations: [TemplateBComponent, TemplateAComponent],
  exports: [TemplateBComponent, TemplateAComponent],
  imports: [
    CommonModule
  ]
})
export class TemplatesModule { }
