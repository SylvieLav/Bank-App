import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransferCreateComponent } from './transfer/routed/transfer-create/transfer-create.component';
import { TransferListComponent } from './transfer/routed/transfer-list/transfer-list.component';
import { UserCreateComponent } from './user/routed/user-create/user-create.component';
import { UserDetailComponent } from './user/routed/user-detail/user-detail.component';
import { UserLoginComponent } from './user/routed/user-login/user-login.component';

const routes: Routes = [
  {
    path: 'home',
    component: TransferListComponent
  },
  {
    path: 'deposit',
    component: TransferCreateComponent
  },
  {
    path: 'transfer',
    component: TransferCreateComponent
  },
  {
    path: 'login',
    component: UserLoginComponent
  },
  {
    path: 'signup',
    component: UserCreateComponent
  },
  {
    path: 'users/:id',
    component: UserDetailComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
