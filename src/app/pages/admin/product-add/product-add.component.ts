import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent {
  categories: any[] = [];
  product: IProduct = {
    name: "",
    price: 0,
    image: "",
    description: "",
    categoryId: CategoryService
  }
  constructor(private productService: ProductService, private categoryService: CategoryService) { }

  ngOnInit(): void {
  this.categoryService.getCategories().subscribe(
      ({ categories }) => (this.categories = categories.data),
      (error) => console.log(error)
    );
}

  onHandleSubmit() {
    this.productService.createProduct(this.product).subscribe(product => {
      console.log(product);
    })
  }
}
