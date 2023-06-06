import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-bicyclesfake1',
  templateUrl: './bicyclesfake1.component.html',
  styleUrls: ['./bicyclesfake1.component.scss']
})
export class Bicyclesfake1Component {
  products: IProduct[] = [];

  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe(
      ({ products }) => (this.products = products.data),
      (error) => console.log(error)
    );
  }
}
