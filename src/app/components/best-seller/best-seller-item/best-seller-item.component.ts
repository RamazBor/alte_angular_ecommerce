import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { StockPipe } from '../../../core/pipes/stock.pipe';

@Component({
  selector: 'alte-best-seller-item',
  standalone: true,
  imports: [CurrencyPipe, StockPipe],
  templateUrl: './best-seller-item.component.html',
  styleUrl: './best-seller-item.component.scss',
})
export class BestSellerItemComponent {
  @Input() img!: string[];
  @Input() name: string = '';
  @Input() available!: boolean;
  @Input() price!: number;
}
