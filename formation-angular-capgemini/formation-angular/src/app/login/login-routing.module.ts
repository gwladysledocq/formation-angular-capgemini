import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageRegisterComponent } from './pages/page-register/page-register.component';
import { PageUserComponent } from './pages/page-user/page-user.component';

const appRoutes: Routes = [
  /* { path: 'login', component: PageLoginComponent, canActivate: [AuthGuard] },
  { path: '', component: PageRegisterComponent, canActivate: [AuthGuard] },
  { path: '', component: PageUserComponent,  resolve: { data: UserResolver}} */
  { path: 'login', component: PageLoginComponent },
  { path: 'register', component: PageRegisterComponent },
  { path: 'user', component: PageUserComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(
      appRoutes
    )
  ]
})
export class LoginRoutingModule { }
