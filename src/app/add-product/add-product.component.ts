import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss',
})
export class AddProductComponent {
  newProductName = '';
  newProductImage = '';
  newProductPrice = 0;
  newProductDescription = '';

  @Output() ProductCreated = new EventEmitter<{
    Name: string;
    Image: string;
    Price: number;
    Description: string;
  }>();
  onProductAdd() {
    this.ProductCreated.emit({
      Name: this.newProductName,
      Image: this.newProductImage,
      Price: this.newProductPrice,
      Description: this.newProductDescription,
    });
    this.newProductName = '';
    this.newProductImage = '';
    this.newProductPrice = 0;
    this.newProductDescription = '';
  }
}
