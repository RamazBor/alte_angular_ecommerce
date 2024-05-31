import { Component, inject } from '@angular/core';
import { BestSellerItemComponent } from './best-seller-item/best-seller-item.component';
import { Observable } from 'rxjs';
import { Product } from '../../core/interfaces/product';
import { ProductFacade } from '../../facades/product.facade';
import { CategoryFacade } from '../../facades/category.facade';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'alte-best-seller',
  standalone: true,
  imports: [BestSellerItemComponent, AsyncPipe],
  templateUrl: './best-seller.component.html',
  styleUrl: './best-seller.component.scss'
})
export class BestSellerComponent {
  productFacade = inject(ProductFacade)

  latestProducts$: Observable<Product[]> = this.productFacade.getBestSelling()
}
