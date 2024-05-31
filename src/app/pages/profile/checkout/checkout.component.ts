import { Component, OnDestroy, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CartFacade } from '../../../facades/cart.facade';
import { OrderFacade } from '../../../facades/order.facade';
import { AuthFacade } from '../../../facades';
import { Router, RouterLink } from '@angular/router';
import { Observable, Subject, map, takeUntil, tap } from 'rxjs';
import { Order } from '../../../core/interfaces/order';
import { KeyValueComponent } from '../../../components/key-value/key-value.component';
import { InputComponent } from '../../../components/input/input.component';
import { AuthHeadComponent } from '../../auth/auth-head/auth-head.component';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { ButtonComponent } from '../../../ui/button/button.component';

@Component({
  selector: 'alte-checkout',
  standalone: true,
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
  imports: [
    KeyValueComponent,
    InputComponent,
    AuthHeadComponent,
    ReactiveFormsModule,
    AsyncPipe,
    CurrencyPipe,
    RouterLink,
    ButtonComponent,
  ],
})
export class CheckoutComponent implements OnDestroy {
  cartFacade = inject(CartFacade);
  orderFacade = inject(OrderFacade);
  authFacade = inject(AuthFacade);
  router = inject(Router);

  sub$ = new Subject();

  total = 0;

  sum$ = this.cartFacade.cart$.pipe(
    map((cart) =>
      cart
        .filter((item) => item?.quantity && item.quantity > 0)
        .reduce((acc, item: any) => acc + +item?.quantity * +item.price, 0)
    ),
    tap((sum) => (this.total = sum))
  );

  carts$: Observable<
    {
      cover: string | undefined;
      id: string;
    }[]
  > = this.cartFacade.cart$.pipe(
    map((cart) => cart.map((item) => ({ cover: item.cover, id: item.id })))
  );

  form = new FormGroup({
    street: new FormControl<string>('', Validators.required),
    city: new FormControl<string>('', Validators.required),
    state: new FormControl<string>('', Validators.required),
    zipCode: new FormControl<string>('', Validators.required),
    country: new FormControl<string>('', Validators.required),
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    fullName: new FormControl<string>('', Validators.required),
  });

  checkout() {
    // Payment logic here
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      return;
    }

    const order: Order = {
      userId: this.authFacade.user.id,
      user: this.authFacade.user,
      products: this.cartFacade.allProducts,
      total: this.total,
      status: 'pending',
      createdAt: new Date(),
      shipping: this.form.value as any,
    };

    this.orderFacade
      .createOrder(order)
      .pipe(takeUntil(this.sub$))
      .subscribe((res) => {
        console.log('Order created:', res);
        this.cartFacade.setToLocalStorage([]);
        this.router.navigate(['/profile/success-order']);
      });
  }

  ngOnDestroy() {
    this.sub$.next(null);
    this.sub$.complete();
  }
}
