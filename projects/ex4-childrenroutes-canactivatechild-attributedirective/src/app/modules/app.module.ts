import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../components/home/home.component';
import { AdminComponent } from '../components/admin/admin.component';
import { DashboardComponent } from '../components/admin/dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { ApproutingModule } from './approuting.module';
import { AppComponent } from '../app.component';
import { HighlightDirective } from '../directives/highlight.directive';
import { SettingsComponent } from '../components/admin/settings.component';



@NgModule({
  declarations: [HomeComponent, AdminComponent, DashboardComponent, SettingsComponent, AppComponent, HighlightDirective],
  imports: [
    CommonModule,
    BrowserModule,
    ApproutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
