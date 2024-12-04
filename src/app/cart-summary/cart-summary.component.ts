import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent {
  @Input() cart: any[] = [];
  @Output() close = new EventEmitter<void>();
  @Output() pay = new EventEmitter<void>();
  @Output() remove = new EventEmitter<any>();
  @Output() clear = new EventEmitter<void>();

  removeFromCart(book: any) {
    this.remove.emit(book);
  }

  getGroupedCart() {
    const groupedCart = this.cart.reduce((acc, item) => {
      const existingItem = acc.find((i: any) => i.title === item.title);
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.subtotal += item.price;
      } else {
        acc.push({ ...item, quantity: 1, subtotal: item.price });
      }
      return acc;
    }, []);
    return groupedCart;
  }

  clearCart() {
    this.clear.emit();
  }

  payCart() {
    this.pay.emit();
  }

  getTotal() {
    return this.cart.reduce((total, item) => total + item.price, 0);
  }
}
