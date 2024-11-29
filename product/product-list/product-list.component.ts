import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: any[] = [];

  constructor(private readonly productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: any[]) => {
      // Initialise l'état d'édition
      this.products = data.map((product) => ({ ...product, isEditing: false }));
    });
  }

  deleteProduct(productId: string): void {
    this.productService
      .deleteProduct(productId)
      .then(() => {
        this.products = this.products.filter(
          (product) => product.id !== productId
        );
      })
      .catch((error) => {
        console.error('Error deleting product', error);
      });
  }

  updateProduct(product: any): void {
    this.productService
      .updateProduct(product)
      .then(() => {
        product.isEditing = false;
      })
      .catch((error) => {
        console.error('Error updating product', error);
      });
  }
}
