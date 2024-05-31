import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthHeadComponent } from '../auth/auth-head/auth-head.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AuthFacade } from '../../facades';

@Component({
  selector: 'alte-profile',
  standalone: true,
  imports: [
    RouterOutlet,
    AuthHeadComponent,
    RouterLink,
    RouterLinkActive,
    CheckoutComponent,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  authFacade: AuthFacade = inject(AuthFacade);

  logout(): void {
    this.authFacade.logout();
  }
}
