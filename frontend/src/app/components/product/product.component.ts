import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../types';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

// Imported FormsModule so i could use primeng rating component properties
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RatingModule, FormsModule, ButtonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})

// @Input - Using when passing props from parent to child component
// ! mark in typescript - securing the product is never undefined or null

//@Output - Using when passing props from child to parent component. Usefull when client can interact with child component that changes parent component
export class ProductComponent {
  @Input() product!: Product;
  @Output() edit: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() delete: EventEmitter<Product> = new EventEmitter<Product>();

  ngOnInit() {}

  // Edit product function that is emiting clicked product
  editProduct() {
    this.edit.emit(this.product);
  }

  deleteProduct() {
    this.delete.emit(this.product);
  }
}
