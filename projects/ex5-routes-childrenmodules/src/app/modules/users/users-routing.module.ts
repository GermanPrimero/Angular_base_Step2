import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from '../../component/users/user-list/user-list.component';
import { UserProfilComponent } from '../../component/users/user-profil/user-profil.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'list', component: UserListComponent},
  {path: 'profile', component: UserProfilComponent},
  {path: '**', redirectTo: 'list', pathMatch: 'full'}
  // {path: 'users', }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
