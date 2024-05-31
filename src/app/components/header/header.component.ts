import { Component, inject } from '@angular/core';
import { ButtonComponent } from '../../ui/button/button.component';
import { RouterLink } from '@angular/router';
import { AuthFacade } from '../../facades';
import { CategoryFacade } from '../../facades/category.facade';
import { CdkMenuTrigger } from '@angular/cdk/menu';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { CartFacade } from '../../facades/cart.facade';
import { Observable, map } from 'rxjs';
import { Product } from '../../core/interfaces/product';

@Component({
  selector: 'alte-header',
  standalone: true,
  imports: [
    ButtonComponent,
    RouterLink,
    CdkMenuTrigger,
    AsyncPipe,
    CurrencyPipe,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  authFacade: AuthFacade = inject(AuthFacade);
  categoryFacade: CategoryFacade = inject(CategoryFacade);
  cartFacade: CartFacade = inject(CartFacade);

  categories$ = this.categoryFacade.getCategories();

  cartCount$: Observable<number> = this.cartFacade.cart$.pipe(
    map((cart: Product[]) =>
      cart
        .filter((item: Product) => item?.quantity && item.quantity > 0)
        .reduce(
          (acc: number, item: any) => acc + +item?.quantity * item.price,
          0
        )
    )
  );

  get isAuthenticated() {
    return this.authFacade.isAuthenticated;
  }

  get user() {
    return this.authFacade.user;
  }

  logout(): void {
    this.authFacade.logout();
  }
}
