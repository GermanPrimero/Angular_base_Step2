import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { BrowserModule } from '@angular/platform-browser';
import { TasksModule } from './tasks.module';



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    TasksModule,
],
  bootstrap: [AppComponent]
})
export class AppModule { }
