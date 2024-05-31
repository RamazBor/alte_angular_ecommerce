import { Component, inject } from '@angular/core';
import { OrderFacade } from '../../../facades/order.facade';
import { AsyncPipe, CurrencyPipe, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '../../../ui/button/button.component';
import { OrderStatusPipe } from '../../../core/pipes/order-status.pipe';
import { OrderItemComponent } from '../../../components/order-item/order-item.component';

@Component({
  selector: 'alte-orders',
  standalone: true,
  imports: [
    AsyncPipe,
    CurrencyPipe,
    DatePipe,
    RouterLink,
    ButtonComponent,
    OrderStatusPipe,
    OrderItemComponent,
  ],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss',
})
export class OrdersComponent {
  orderFacade = inject(OrderFacade);

  orders$ = this.orderFacade.getOrders();
}
