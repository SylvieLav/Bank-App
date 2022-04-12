import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "../app-routing.module";
import { UserCreateComponent } from "./routed/user-create/user-create.component";
import { UserDetailComponent } from "./routed/user-detail/user-detail.component";
import { UserLoginComponent } from './routed/user-login/user-login.component';

@NgModule({
    declarations: [UserCreateComponent, UserDetailComponent, UserLoginComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, AppRoutingModule]
  })
  export class UserModule {}