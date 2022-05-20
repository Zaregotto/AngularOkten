import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserService } from "./services";
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    UserRoutingModule
  ],
  providers: [
    UserService
  ]
})
export class UserModule { }