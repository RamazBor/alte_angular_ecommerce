import { Component, EventEmitter, Input, Output } from '@angular/core';
import { QuantityInputComponent } from '../quantity-input/quantity-input.component';
import { Product } from '../../core/interfaces/product';
import { CurrencyPipe, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'alte-cart-item',
  standalone: true,
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss',
  imports: [QuantityInputComponent, CurrencyPipe, NgOptimizedImage],
})
export class CartItemComponent {
  @Input() product: Product = {} as Product;

  @Output() remove = new EventEmitter<Product>();
  @Output() update = new EventEmitter<{
    product: Product;
    quantity: number;
  }>();
}
