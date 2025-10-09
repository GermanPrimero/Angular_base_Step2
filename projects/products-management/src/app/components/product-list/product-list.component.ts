import {
  Component,
  EventEmitter,
  inject,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { IProduct } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: IProduct[] = [];
  showList = false;
  showFilter = false;
  nameEntered = '';
  priceEntered : number|null = null;
  productNameSelected: string = '';
  status = 'loading';

  productService = inject(ProductService);

  ngOnInit() {
    this.products = this.productService.getAllProducts();
    this.loadingInitialStatus();
  }
  ngOnDestroy(): void {
    console.log('se destruyo el componente ProductList');
  }

  loadingInitialStatus() {
    if(this.products.length == 0) {
      this.status="empty";
    } else {
      this.status="loading";
    }
  }

  toggleList() {
    this.showList ? (this.showList = false) : (this.showList = true);
    this.showFilter ? (this.showFilter = false) : (this.showFilter = true);
    this.changeStatus();

  }

  changeStatus() {
    if(this.showList) {
      this.status = "ready";
    } else {
      this.status = "loading";
    }
  }

  onProductSelected(name: string) {
    this.productNameSelected = name;
    console.log(this.productNameSelected);
  }

  filterProducts() {
    // console.log(typeof this.priceEntered);
    
    // if (this.nameEntered == "" && (this.priceEntered==null)  /*|| this.priceEntered == null || this.priceEntered == 0*/) {
    //   this.products = this.productService.getAllProducts();
    // } else {
    //   this.products = this.productService.filterProducts(this.nameEntered, this.priceEntered);
    // }

    this.products = this.productService.filterProducts(this.nameEntered, this.priceEntered)
  }
}
