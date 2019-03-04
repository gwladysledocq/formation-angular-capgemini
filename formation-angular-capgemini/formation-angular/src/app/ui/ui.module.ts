import { CoderbaseUiModule } from '@coderbase/ui';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { NgModule } from '@angular/core';
import { UiComponent } from './containers/ui/ui.component';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, NavComponent, UiComponent],
  exports: [UiComponent],
  imports: [
    CommonModule, CoderbaseUiModule
  ]
})
export class UiModule { }
