import { Component } from '@angular/core';
import { AuthHeadComponent } from '../../auth/auth-head/auth-head.component';
import { ButtonComponent } from '../../../ui/button/button.component';

@Component({
  selector: 'alte-fail-order',
  standalone: true,
  templateUrl: './fail-order.component.html',
  styleUrl: './fail-order.component.scss',
  imports: [AuthHeadComponent, ButtonComponent],
})
export class FailOrderComponent {}
