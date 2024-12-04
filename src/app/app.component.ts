import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import jsonData from '../assets/books.json';
import { CardPopupComponent } from './card-popup/card-popup.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, CardPopupComponent, CartSummaryComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Hispamer';
  books = jsonData.books;
  searchTerm = '';
  selectedCategory = '';
  filteredBooks = this.books;
  selectedItem: any = null;
  isCartSummaryOpen = false;

  constructor(public cartService: CartService) {}

  filterProducts() {
    this.filteredBooks = this.books.filter(book => {
      const matchesSearchTerm = book.title.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesCategory = this.selectedCategory ? book.category === this.selectedCategory : true;
      return matchesSearchTerm && matchesCategory;
    });
  }

  openPopup(book: any) {
    this.selectedItem = book;
  }

  closePopup() {
    this.selectedItem = null;
  }

  openCartSummary() {
    this.isCartSummaryOpen = true;
  }

  closeCartSummary() {
    this.isCartSummaryOpen = false;
  }

  payCart() {
    this.cartService.clearCart();
    this.closeCartSummary();
  }

  removeFromCart(book: any) {
    this.cartService.removeFromCart(book);
  }

  clearCart() {
    this.cartService.clearCart();
  }
}
