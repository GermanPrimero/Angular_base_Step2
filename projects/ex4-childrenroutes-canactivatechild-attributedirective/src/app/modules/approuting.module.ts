import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { AdminComponent } from '../components/admin/admin.component';
import { adminGuard } from '../guards/admin.guard';
import { DashboardComponent } from '../components/admin/dashboard.component';
import { SettingsComponent } from '../components/admin/settings.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'admin',
    component: AdminComponent,
    canActivateChild: [adminGuard],
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'settings', component: SettingsComponent },
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
    ],
  },
  { path: '**', redirectTo: '', pathMatch: 'full'}
];
// FEEDBACK: when using routes with redirectTo, set the pathMarch: 'full' attribute
// to ensure the url exactly matches the path 

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ApproutingModule {}
