import { Component } from '@angular/core';
import { ICategory } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss'],
})
export class BaseLayoutComponent {

  isShow = false;
  category: ICategory[] = [];



  constructor(private categoryService: CategoryService, private productService:ProductService) {
    this.categoryService.getCategories().subscribe((data) => {

      this.category = data.categories.data;
    });
  }

  handleShow() {
    this.isShow = !this.isShow;
  }

  onGetCategory(id: any) {
  this.categoryService.getProductByCategory(id).subscribe((data) => this.productService.setProductByCategory(data.category.productId)
  );
  }
}
