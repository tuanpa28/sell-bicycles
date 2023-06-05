import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  products: IProduct[] = [];

  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe(
      ({products}) => (this.products = products.data),
      (error) => console.log(error)
    );
  }

  onHandleRemove(id: any) {
    if (window.confirm('Bạn muốn xóa sản phẩm?')) {
      this.productService.removeProduct(id).subscribe(() => {
        this.products = this.products.filter((product) => product._id !== id);
      });
    }
  }
}