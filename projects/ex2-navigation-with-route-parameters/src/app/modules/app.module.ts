import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { HomeComponent } from '../components/home/home.component';
import { ProductListComponent } from '../components/products/product-list/product-list.component';
import { ProductDetailComponent } from '../components/products/product-detail/product-detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [AppComponent, HomeComponent, ProductListComponent, ProductDetailComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule
],
bootstrap:[AppComponent]
})
export class AppModule { }
