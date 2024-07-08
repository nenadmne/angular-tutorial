import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product, Products } from '../../types';
import { ProductComponent } from '../components/product/product.component';
import { CommonModule } from '@angular/common';

// ComonModule needed for activating for loop
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private productService: ProductsService) {}

  products: Product[] = [];

  // Sending url and option parameters to Api Service trough Product service
  // Option parameters are query parameters (page and per page) that will mutate the url and extract needed products
  ngOnInit() {
    this.productService
      .getProducts('http://localhost:3000/clothes', {
        page: 0,
        perPage: 5,
      })
      .subscribe((products: Products) => {
        this.products = products.items;
      });
  }

  onProductOutput(product: Product) {
    console.log(product, 'Output');
  }
}
