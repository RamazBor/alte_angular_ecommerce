import { Component, OnDestroy, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  Observable,
  Subject,
  map,
  mergeMap,
  share,
  switchMap,
  takeUntil,
} from 'rxjs';
import { Product } from '../../core/interfaces/product';
import { AsyncPipe, CurrencyPipe, JsonPipe, NgIf } from '@angular/common';
import { ProductFacade } from '../../facades/product.facade';
import { CategoryFacade } from '../../facades/category.facade';
import { ColorFacade } from '../../facades/color.facade';
import { ColorItemComponent } from '../../components/color-item/color-item.component';
import { Color } from '../../core/interfaces/color';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { ReviewComponent } from '../../components/review/review.component';
import { StockCheckComponent } from '../../components/stock-check/stock-check.component';
import { SizeItemComponent } from '../../components/size-item/size-item.component';
import { QuantityInputComponent } from '../../components/quantity-input/quantity-input.component';
import { ProductItemComponent } from '../../components/product-item/product-item.component';
import { DomSanitizer } from '@angular/platform-browser';
import { CartFacade } from '../../facades/cart.facade';
import { ButtonComponent } from '../../ui/button/button.component';
import { WishlistFacade } from '../../facades/wishlist.facade';

@Component({
  selector: 'alte-product',
  standalone: true,
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  imports: [
    AsyncPipe,
    CurrencyPipe,
    JsonPipe,
    ColorItemComponent,
    BreadcrumbComponent,
    NgIf,
    ReviewComponent,
    StockCheckComponent,
    SizeItemComponent,
    QuantityInputComponent,
    ProductItemComponent,
    ButtonComponent,
  ],
})
export class ProductComponent implements OnDestroy {
  route = inject(ActivatedRoute);
  productFacade = inject(ProductFacade);
  categoryFacade = inject(CategoryFacade);
  colorFacade = inject(ColorFacade);
  cartFacade = inject(CartFacade);
  wishlistFacade: WishlistFacade = inject(WishlistFacade);
  sanitazer = inject(DomSanitizer);

  get insertScritp() {
    return this.sanitazer.bypassSecurityTrustHtml(`
      <script>
        console.log('Hello world')
      </script>
    `);
  }

  selectedColor?: string;
  quantity: number = 1;

  sub$: Subject<any> = new Subject();

  product$: Observable<Product> = this.route.params.pipe(
    switchMap((params: any) =>
      this.productFacade.getProduct(params['id']).pipe(
        map((product) => {
          let cover;
          if (product.images && product.images.length) {
            cover = product.images[0];
          }
          return {
            ...product,
            cover,
          };
        }),
        mergeMap((product) =>
          this.categoryFacade
            .getCategoryById(product.categoryId)
            .pipe(map((category) => ({ ...product, category })))
        ),
        mergeMap((productWithCategory) =>
          this.colorFacade
            .getColorById(productWithCategory.colorId)
            .pipe(map((color) => ({ ...productWithCategory, color })))
        )
      )
    )
  );

  relatedProducts$: Observable<Product[]> = this.product$.pipe(
    switchMap((product) =>
      this.productFacade.getRelatedProducts(product.categoryId, product.id)
    )
  );

  ngOnDestroy(): void {
    this.sub$.next(null);
    this.sub$.complete();
  }

  selectColor($event: Color) {}

  addToCart(product: Product) {
    this.cartFacade.addToCart(product, this.quantity);
  }

  addToWishlist(product: Product) {
    this.wishlistFacade
      .addWishlist(product)
      .pipe(takeUntil(this.sub$))
      .subscribe((res) => {
        console.log(res);
        alert('Product added to wishlist');
      });
  }
}
