import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-card-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-popup.component.html',
  styleUrls: ['./card-popup.component.css']
})
export class CardPopupComponent {
  @Input() book: any;
  @Output() close = new EventEmitter<void>();

  constructor(private cartService: CartService) {}

  addToCart() {
    this.cartService.addToCart(this.book);
  }
}
