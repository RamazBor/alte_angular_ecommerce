import { Component, inject } from '@angular/core';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductFacade } from '../../facades/product.facade';
import { Observable } from 'rxjs';
import { Product } from '../../core/interfaces/product';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'alte-product-list',
  standalone: true,
  imports: [ProductCardComponent, AsyncPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  productFacade = inject(ProductFacade);

  latestProducts$: Observable<Product[]> = this.productFacade.getProductsList();
}
