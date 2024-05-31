import { Component, Input } from '@angular/core';
import { Product } from '../../core/interfaces/product';
import { CurrencyPipe, NgIf } from '@angular/common';
import { StockPipe } from '../../core/pipes/stock.pipe';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'alte-product-item',
  standalone: true,
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss',
  imports: [CurrencyPipe, StockPipe, NgIf, RouterLink],
})
export class ProductItemComponent {
  @Input() product: Product = {} as Product;
}
