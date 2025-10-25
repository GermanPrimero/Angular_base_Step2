import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { HomeComponent } from '../components/home/home.component';
import { ProductListComponent } from '../components/products/product-list/product-list.component';
import { ProductDetailComponent } from '../components/products/product-detail/product-detail.component';
import { authGuard } from '../guards/auth.guard';
import { AdminComponent } from '../components/admin/admin.component';


const routes: Routes = [{path: '', component: HomeComponent},
  {path: 'admin', component: AdminComponent, canActivate: [authGuard]},
  {path: 'products', component: ProductListComponent},
  {path:'products/:id', component: ProductDetailComponent},
  {path: 'login', component: LoginComponent}]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
