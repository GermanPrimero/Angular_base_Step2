import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { IProduct } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: IProduct[] = [];
  showList = false;
  nombreIntroducido = "";

  ngOnInit() {
    this.products = [
      // { name: 'Laptop', price: 1200 },
      // { name: 'Mouse', price: 25 },
      // { name: 'Keyboard', price: 50 },
      // { name: 'Monitor', price: 300 },
      // { name: 'Headphones', price: 80 },
    ];
  }
  ngOnDestroy(): void {
    console.log('se destruyo el componente ProductList');
  }

  toggleList(){

    (this.showList) ? this.showList = false : this.showList = true;

  }
}
