import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { FormsModule } from '@angular/forms';
import { UsersService } from './users.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    UsersService
  ],
  exports: [
    UserComponent
  ],
  declarations: [
    UserComponent
  ]
})
export class UsersModule {}
