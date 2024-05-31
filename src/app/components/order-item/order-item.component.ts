import { Component, Input } from '@angular/core';
import { CurrencyPipe, DatePipe, NgOptimizedImage } from '@angular/common';
import { Product } from '../../core/interfaces/product';

@Component({
  selector: 'alte-order-item',
  standalone: true,
  imports: [CurrencyPipe, DatePipe, NgOptimizedImage],
  templateUrl: './order-item.component.html',
  styleUrl: './order-item.component.scss',
})
export class OrderItemComponent {
  @Input() product: Product = {} as Product;
}
