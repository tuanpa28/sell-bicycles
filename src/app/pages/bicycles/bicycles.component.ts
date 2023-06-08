import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-bicycles',
  templateUrl: './bicycles.component.html',
  styleUrls: ['./bicycles.component.scss'],
})
export class BicyclesComponent {
  products: IProduct[] = [];
  searchText: string = '';
  minPrice: number = 0;
  maxPrice: number = 0;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.productService.getProducts().subscribe(
      ({ products }) => (this.products = products.data),
      (error) => console.log(error)
    );
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const searchKeyword = params['_searchText'];
      const minPrice = params['_minPrice'];
      const maxPrice = params['_maxPrice'];
      const queryObject: Record<string, any> = {};
      if (searchKeyword) {
        queryObject['_searchText'] = searchKeyword;
      }
      if (minPrice && maxPrice) {
        queryObject['_minPrice'] = minPrice;
        queryObject['_maxPrice'] = maxPrice;
      }

      this.productService
        .searchProducts(queryObject)
        .subscribe(({ products }) => {
          this.products = products.data;
        });
    });
  }

  searchProducts() {
    const queryParams: Record<string, any> = {};
    if (this.searchText) {
      queryParams['_searchText'] = this.searchText;
    }
    if (this.minPrice >= 0 && this.maxPrice > 0) {
      queryParams['_minPrice'] = this.minPrice;
      queryParams['_maxPrice'] = this.maxPrice;
    }
    if (this.searchText || (this.minPrice >= 0 && this.maxPrice > 0)) {
      this.router.navigate([window.location.pathname], { queryParams });
    }
  }
}
