import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { IProduct } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: false,
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss',
})
export class ProductItemComponent implements OnInit, OnDestroy {
  @Input() product: IProduct = { name: '', price: 0 };
  @Output() productName: EventEmitter<string> = new EventEmitter<string>();

  productSelected(name: string) {
    this.productName.emit(name)
  }

  ngOnInit(): void {
    console.log('se crea componente ProductItem');
  }

  ngOnDestroy(): void {
    console.log('se destruye componente ProductItem');
  }
}
