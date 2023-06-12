import { Component } from '@angular/core';
import { ICategory } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss'],
})
export class BaseLayoutComponent {

  isShow = false;
  category: ICategory[] = [];
  constructor(private categoryService: CategoryService) {
    this.categoryService.getCategories().subscribe((data) => {

      this.category = data.categories.data;
    });
  }

  handleShow() {
    this.isShow = !this.isShow;
  }
}
