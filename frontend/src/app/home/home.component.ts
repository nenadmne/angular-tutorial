import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product, Products } from '../../types';
import { ProductComponent } from '../components/product/product.component';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';

// ComonModule needed for activating for loop
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductComponent, CommonModule, PaginatorModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private productService: ProductsService) {}

  products: Product[] = [];
  totalRecords: number = 0;
  rows: number = 5;

  onProductOutput(product: Product) {
    console.log(product, 'Output');
  }

  // Sending url and option parameters to Api Service trough Product service
  // Option parameters are query parameters (page and per page) that will mutate the url and extract needed products
  fetchProducts(page: number, perPage: number) {
    this.productService
      .getProducts('http://localhost:3000/clothes', {
        page,
        perPage,
      })
      .subscribe((products: Products) => {
        this.products = products.items;
        this.totalRecords = products.total;
      });
  }

  ngOnInit() {
    this.fetchProducts(0, this.rows);
  }

  onPageChange(event: any) {
    this.fetchProducts(event.page, event.rows);
  }
}
