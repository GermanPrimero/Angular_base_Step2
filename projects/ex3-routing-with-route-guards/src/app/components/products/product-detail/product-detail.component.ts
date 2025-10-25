import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  standalone: false,
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit {

  productId:number = 0;

  constructor(private route: ActivatedRoute) {

    
  }
  ngOnInit(): void {
    this.route.params.subscribe((params) =>{
      this.productId =+ params['id'];
    })
  }

}
