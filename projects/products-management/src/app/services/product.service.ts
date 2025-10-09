import { Injectable } from '@angular/core';
import { IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: IProduct[] = [];
  constructor() {
    this.products = [
      { name: 'Laptop', price: 1200 },
      { name: 'Mouse', price: 25 },
      { name: 'Keyboard', price: 50 },
      { name: 'Monitor', price: 300 },
      { name: 'Headphones', price: 80 },
    ];
   }

   getProducts() {
    return this.products;
   }
}
