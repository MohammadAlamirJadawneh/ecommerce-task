import { Component } from '@angular/core';
import { PRODUCTS } from './Data/db-data';
import { IProducts } from './Data/IProducts';
import { last } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ecommerce-task';
  Product = PRODUCTS;
 
  onProductClick(product: IProducts) {
    console.log('app click');
    console.table(product);
  }

  onAddProduct(ProductData: {
    Name: string;
    Image: string;
    Price: number;
    Description: string;
  }) {
    this.Product.push({
      Name: ProductData.Name,
      Image: ProductData.Image,
      Price: ProductData.Price,
      Description: ProductData.Description,
    });
   
    console.log('The Product Is Created');
    console.table(this.Product[this.Product.length-1]);
     
 
  }
}
