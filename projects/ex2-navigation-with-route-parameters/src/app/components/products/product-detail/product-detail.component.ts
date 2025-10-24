import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-product-detail',
  standalone: false,
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {

  product: any;

  constructor(private route: ActivatedRoute, private productService: ProductService) {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('El id del usuario es: ' + id);
    this.product = productService.getProductById(Number(id));
    
  }

}
