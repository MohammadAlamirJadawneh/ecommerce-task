import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProducts } from '../Data/IProducts';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  // @Input() Product1: {
  //   Name: string;
  //   Image: string;
  //   Price: number;
  //   Description: string;
  // };f
  @Input() Products: IProducts;
  @Output() productSelected = new EventEmitter<IProducts>();
  onProductView() {
    console.log('Card View');
    this.productSelected.emit(this.Products);
  }
}
