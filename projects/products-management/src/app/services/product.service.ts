import { Injectable } from '@angular/core';
import { IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: IProduct[] = [];

  constructor() {
    this.products = [
      { name: 'Laptop', price: 1200 },
      { name: 'Mouse', price: 25 },
      { name: 'Keyboard', price: 50 },
      { name: 'Monitor', price: 300 },
      { name: 'Monitor MSI', price: 300 },
      { name: 'Monitor Asus', price: 150 },
      { name: 'Headphones', price: 80 },
    ];
   }

   getAllProducts() {
    return this.products;
   }

   filterProducts(nameEntered: string, priceEntered:number|null) {
    return this.products.filter((product) => {

      let isNameMatch = true;
      let isPriceMatch = true;

      if(nameEntered=="") {
        isNameMatch = true;
      } else {
        if(product.name.toLowerCase().includes(nameEntered.toLowerCase())) {
          isNameMatch = true;
        } else {
          isNameMatch = false;
        }
      }

      if(priceEntered==null) {
        isPriceMatch = true;
      } else {
        if(product.price== priceEntered) {
          isPriceMatch = true;
        } else {
          isPriceMatch = false;
        }
      }

      return isNameMatch && isPriceMatch;

      // if(nameEntered!="" && (priceEntered!=0 || priceEntered!=null)) {
      //   if(product.name.toLowerCase().includes(nameEntered.toLowerCase()) && product.price==priceEntered) {
      //     return true;
      //   } else {
      //     return false;
      //   }
      // }

      // if(nameEntered!="") {
      //   if(product.name.toLowerCase().includes(nameEntered.toLowerCase())) {
      //     return true;
      //   }
      // }

      // if(product.price == priceEntered) {
      //   return true;
      // }

      // if(nameEntered==="") {
      //   return false
      // }

      // if(product.name.toLowerCase().includes(nameEntered.toLowerCase()) || product.price==priceEntered) {
      //   return true;
      // } else {
      //   return false;
      // }

    })
   }
}
