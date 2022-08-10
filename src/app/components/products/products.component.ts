import { Component, OnInit } from '@angular/core';
import { ProductsModule } from 'src/app/models/products/products.module';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Array<ProductsModule>=[];
  constructor(
    private productService: ProductsService

  ) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.productService.getAllProducts()
      .subscribe(res => {
        console.log(res);
        res.forEach(element => {
            this.products.push(element);
          })
      });
  }


  getProduct(id: number): void {
    this.productService.getProduct(id).subscribe(product => {
      console.log(product);
    });
  }

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id).subscribe(product => {
      console.log(product);
    });
  }

}
