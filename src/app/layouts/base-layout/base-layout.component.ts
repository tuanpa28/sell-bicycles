import { Component } from '@angular/core';
import { ICategory } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss']
})
export class BaseLayoutComponent {
  isShow = false;

  category!:ICategory[];

constructor(private categoryService:CategoryService) {
  this.categoryService.getCategories().subscribe(data=> {
    console.log(data.categories.data);

    this.category = data.categories.data
  })
}

  ngOnInit() {
    console.log(this.isShow);

  }

  handleShow() {
    this.isShow = !this.isShow;
  }
}
