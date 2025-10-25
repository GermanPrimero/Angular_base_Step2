import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from '../components/admin/admin.component';
import { HomeComponent } from '../components/home/home.component';
import { LoginComponent } from '../components/login/login.component';
import { ProductListComponent } from '../components/products/product-list/product-list.component';
import { ProductDetailComponent } from '../components/products/product-detail/product-detail.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AppComponent, AdminComponent, HomeComponent, LoginComponent, ProductListComponent, ProductDetailComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
