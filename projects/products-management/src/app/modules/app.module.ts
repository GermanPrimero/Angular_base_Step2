import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ProductsModule } from './products.module';



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ProductsModule
  ],
  bootstrap:[AppComponent]
})
export class AppModule { }
