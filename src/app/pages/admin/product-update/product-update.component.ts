import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { ICategory } from 'src/app/interfaces/category';
import { UploadImageService } from 'src/app/services/upload-image.service';
@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss'],
})
export class ProductUpdateComponent {
  selectedFile: File | null = null;

  id: string = '';

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
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private categoryService: CategoryService,
    private uploadImageService: UploadImageService
  ) {
    this.route.paramMap.subscribe((param) => {
      const id = String(param.get('id'));
      this.productService.getProductById(id).subscribe(({ product }) => {
        this.id = product._id || '';
        this.productForm.patchValue(product);
      });
    });

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
            _id: this.id,
            name: this.productForm.value.name || '',
            price: this.productForm.value.price || 0,
            description: this.productForm.value.description || '',
            image: imageUrl || {},
            categoryId: this.productForm.value.categoryId || '',
          };

          this.productService.updateProduct(product).subscribe(() => {
            this.router.navigate(['/admin/products']);
            alert('Sửa sản phẩm thành công!');
          });
        });
    }
  }
}
