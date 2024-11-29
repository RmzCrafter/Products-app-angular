import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly productsCollection: AngularFirestoreCollection<any>;
  products: Observable<any[]>;

  constructor(private readonly firestore: AngularFirestore) {
    this.productsCollection = firestore.collection('products');
    this.products = this.productsCollection.valueChanges({ idField: 'id' });
  }

  getProducts(): Observable<any[]> {
    return this.products;
  }

  createProduct(product: any): Promise<void> {
    const id = this.firestore.createId();
    return this.productsCollection.doc(id).set({ ...product, id });
  }

  updateProduct(product: any): Promise<void> {
    return this.productsCollection.doc(product.id).update(product);
  }

  deleteProduct(id: string): Promise<void> {
    return this.productsCollection.doc(id).delete();
  }
}
