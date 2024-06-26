import { Routes } from '@angular/router';
import { authGuard } from '../../core/guards';
import { ProfileComponent } from './profile.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { PasswordUpdateComponent } from './password-update/password-update.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { CartComponent } from './cart/cart.component';
import { SuccessOrderComponent } from './success-order/success-order.component';
import { CheckoutComponent } from './checkout/checkout.component';

export const profileRoutes: Routes = [
  {
    path: 'cart',
    canActivate: [authGuard],
    component: CartComponent,
  },
  {
    path: 'checkout',
    canActivate: [authGuard],
    component: CheckoutComponent,
  },
  {
    path: 'success-order',
    canActivate: [authGuard],
    component: SuccessOrderComponent,
  },
  {
    path: '',
    component: ProfileComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        redirectTo: 'myProfile',
        pathMatch: 'full',
      },
      {
        path: 'orders',
        loadChildren: () =>
          import('./orders/order.routes').then((m) => m.orderRoutes),
      },
      {
        path: 'wishlist',
        component: WishlistComponent,
      },
      {
        path: 'password-update',
        component: PasswordUpdateComponent,
      },
      {
        path: 'myProfile',
        component: MyProfileComponent,
      },
    ],
  },
];
