import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { AboutComponent } from '../components/about/about.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { routes } from '../app.routes';
import { RouterLink } from '@angular/router';


@NgModule({
  declarations: [HomeComponent, AboutComponent, AppComponent],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    RouterModule,
    BrowserModule,
    RouterLink
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
