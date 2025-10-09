import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from '../components/product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { ProductItemComponent } from '../components/product-item/product-item.component';
import { HighlightDirective } from '../directives/highlight.directive';

@NgModule({
  declarations: [ProductListComponent, ProductItemComponent, HighlightDirective],
  imports: [
    CommonModule,
    FormsModule
    
  ],
  exports: [
    ProductListComponent
  ]
})
export class ProductsModule { }
