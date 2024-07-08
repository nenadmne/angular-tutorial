import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../types';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';

// Imported FormsModule so i could use primeng rating component properties
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RatingModule, FormsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})

// @Input - Using when passing props from parent to child component
// ! mark in typescript - securing the product is never undefined or null

//@Output - Using when passing props from child to parent component. Usefull when client can interact with child component that changes parent component
export class ProductComponent {
  @Input() product!: Product;
  @Output() productOutput: EventEmitter<Product> = new EventEmitter<Product>();

  ngOnInit() {
    this.productOutput.emit(this.product);
  }
}
