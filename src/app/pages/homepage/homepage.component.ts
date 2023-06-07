import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  products: IProduct[] = [];
  

  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe(
      ({ products }) => (this.products = products.data),
      (error) => console.log(error)
    );
  }


}
