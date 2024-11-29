import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product-model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent {
  product: Product = {
    name: '',
    description: '',
    price: 0,
    createdAt: new Date(),
  };

  constructor(private productService: ProductService, private router: Router) {}

  addProduct() {
    this.productService
      .createProduct(this.product)
      .then(() => {
        console.log('Product added successfully');
        this.router.navigate(['/products']);
        this.resetForm();
      })
      .catch((error: any) => {
        console.error('Error adding product', error);
      });
  }

  resetForm() {
    this.product = {
      name: '',
      description: '',
      price: 0,
      createdAt: new Date(),
    };
  }
}
