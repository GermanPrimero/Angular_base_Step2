import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {

  products = [
    {
      "id": 1,
      "name": "Wireless Bluetooth Headphones",
      "description": "Noise-cancelling headphones with a fast-charging case."
    },
    {
      "id": 2,
      "name": "Sports Smartwatch",
      "description": "Water-resistant smartwatch with heart rate monitor and GPS."
    },
    {
      "id": 3,
      "name": "RGB Mechanical Keyboard",
      "description": "Keyboard with customizable backlighting and mechanical switches."
    },
    {
      "id": 4,
      "name": "4K Action Camera",
      "description": "Compact camera with 4K recording and image stabilization."
    },
    {
      "id": 5,
      "name": "Anti-Theft Laptop Backpack",
      "description": "Ergonomic backpack with USB port and padded laptop compartment."
    }
  ];


}
