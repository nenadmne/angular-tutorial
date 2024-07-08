import { Component, Input } from '@angular/core';
import { Product } from '../../../types';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})

// @Input - Using when passing props from parent to child component
// ! mark in typescript - securing the product is never undefined or null
export class ProductComponent {
  @Input() product!: Product;
}
