import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: any[] = [];
  private total = 0;

  constructor() { }

  addToCart(book: any) {
    this.cart.push(book);
    this.total += book.price;
  }

  removeFromCart(book: any) {
    const index = this.cart.indexOf(book);
    if (index > -1) {
      this.cart.splice(index, 1);
      this.total -= book.price;
    }
  }

  getCart() {
    return this.cart;
  }

  getTotal() {
    return this.total;
  }

  clearCart() {
    this.cart = [];
    this.total = 0;
  }
}
