import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { StockPipe } from '../../../core/pipes/stock.pipe';

@Component({
  selector: 'alte-product-card',
  standalone: true,
  imports: [CurrencyPipe, StockPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input() img!: string[];
  @Input() name: string = '';
  @Input() available!: boolean;
  @Input() price!: number;
}
