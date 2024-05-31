import { Component } from '@angular/core';
import { AuthHeadComponent } from '../../auth/auth-head/auth-head.component';
import { ButtonComponent } from '../../../ui/button/button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'alte-success-order',
  standalone: true,
  templateUrl: './success-order.component.html',
  styleUrl: './success-order.component.scss',
  imports: [AuthHeadComponent, ButtonComponent, RouterLink],
})
export class SuccessOrderComponent {}
