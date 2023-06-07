import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-bicyclesfake1',
  templateUrl: './bicyclesfake1.component.html',
  styleUrls: ['./bicyclesfake1.component.scss']
})
export class Bicyclesfake1Component {
  products!: IProduct ;

  constructor(private productService: ProductService,private router:ActivatedRoute) {
    this.router.params.subscribe(({id}) => this.productService.getProductById(id).subscribe(
      ({product}) => {this.products = product

      },
      (error) => console.log(error)
    ))
  }
}
