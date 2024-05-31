import { Component, inject } from '@angular/core';
import { AuthHeadComponent } from '../../auth/auth-head/auth-head.component';
import { Product } from '../../../core/interfaces/product';
import { map } from 'rxjs';
import { CartFacade } from '../../../facades/cart.facade';
import { Router, RouterLink } from '@angular/router';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { KeyValueComponent } from '../../../components/key-value/key-value.component';
import { CartItemComponent } from '../../../components/cart-item/cart-item.component';
import { ButtonComponent } from '../../../ui/button/button.component';

@Component({
  selector: 'alte-cart',
  standalone: true,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
  imports: [
    AuthHeadComponent,
    AsyncPipe,
    CurrencyPipe,
    KeyValueComponent,
    CartItemComponent,
    RouterLink,
    ButtonComponent,
  ],
})
export class CartComponent {
  cartFacade = inject(CartFacade);
  router = inject(Router);

  carts$ = this.cartFacade.cart$;

  sum$ = this.cartFacade.cart$.pipe(
    map((cart) =>
      cart
        .filter((item) => item?.quantity && item.quantity > 0)
        .reduce((acc, item: any) => acc + +item?.quantity * +item.price, 0)
    )
  );

  checkout() {
    this.router.navigate(['/profile/checkout']);
  }

  removeFromCart(product: Product) {
    this.cartFacade.removeFromCart(product);
  }

  updateToCart($event: { product: Product; quantity: number }) {
    this.cartFacade.updateCart($event.product, $event.quantity);
  }
}
