import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfilComponent } from '../../component/users/user-profil/user-profil.component';
import { UserListComponent } from '../../component/users/user-list/user-list.component';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [UserProfilComponent, UserListComponent],
  imports: [CommonModule, UsersRoutingModule],

})
export class UsersModule {}
