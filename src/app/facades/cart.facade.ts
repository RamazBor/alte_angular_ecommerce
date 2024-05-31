import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../core/interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class CartFacade {
  cart: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);

  cart$: Observable<Product[]> = this.cart.asObservable();

  get allProducts() {
    return this.cart.getValue();
  }

  feePercentage = 0.18;

  constructor() {
    // after refresh product total price remain unchangable
    this.cart.next(this.getFromLocalStorage());
  }

  setToLocalStorage(cart: any) {
    localStorage.setItem('cart', JSON.stringify(cart));
    this.cart.next(cart);
  }

  getFromLocalStorage() {
    return JSON.parse(localStorage.getItem('cart') || '[]');
  }

  addToCart(product: any, quantity: number = 1) {
    console.log('Product added to cart:', product);
    const cart = this.getFromLocalStorage();

    if (cart.find((item: any) => item.id === product.id)) {
      this.updateCart(product, quantity);
      return;
    }
    this.setToLocalStorage([...cart, product]);
  }

  removeFromCart(product: any) {
    const cart = this.getFromLocalStorage();
    this.setToLocalStorage(cart.filter((item: any) => item.id !== product.id));
  }

  updateCart(product: any, quantity: number = 1) {
    console.log('Product updated in cart:', product);
    const cart = this.getFromLocalStorage();
    const updatedCart = cart.map((item: any) => {
      if (item.id === product.id) {
        return {
          ...item,
          quantity: quantity,
        };
      }
      return item;
    });

    this.setToLocalStorage(updatedCart);
  }
}
