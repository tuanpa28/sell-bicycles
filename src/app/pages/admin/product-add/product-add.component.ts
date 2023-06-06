import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';
import { UploadImageService } from 'src/app/services/upload-image.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ICategory } from 'src/app/interfaces/category';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss'],
})
export class ProductAddComponent {
  selectedFile: File | null = null;

  productForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    price: [0, [Validators.required]],
    description: ['', [Validators.required]],
    image: [{}, [Validators.required]],
    categoryId: ['', [Validators.required]],
  });

  categories: ICategory[] = [];

  constructor(
    private productService: ProductService,
    private uploadImageService: UploadImageService,
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private router: Router
  ) {
    this.categoryService.getCategories().subscribe(({ categories }: any) => {
      this.categories = categories.data;
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onHandleSubmit() {
    if (this.productForm.invalid) return;
    if (this.selectedFile) {
      this.uploadImageService
        .uploadImage(this.selectedFile)
        .subscribe((response: any) => {
          const imageUrl = response.urls[0];
          const product: any = {
            name: this.productForm.value.name || '',
            price: this.productForm.value.price || 0,
            description: this.productForm.value.description || '',
            image: imageUrl || {},
            categoryId: this.productForm.value.categoryId || '', // Assign the fetched category object
          };
          console.log(product);

          this.productService.createProduct(product).subscribe(() => {
            this.router.navigate(['/admin/products']);
            alert(`Thêm danh mục thành công!`);
          });
        });
    }
  }
}
