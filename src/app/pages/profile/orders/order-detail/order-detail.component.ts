import { Component, inject } from '@angular/core';
import { OrderFacade } from '../../../../facades/order.facade';
import { ActivatedRoute, Params } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { AsyncPipe, CurrencyPipe, DatePipe, JsonPipe } from '@angular/common';
import { OrderItemComponent } from '../../../../components/order-item/order-item.component';
import { KeyValueComponent } from '../../../../components/key-value/key-value.component';
import { OrderStatusPipe } from '../../../../core/pipes/order-status.pipe';

@Component({
  selector: 'alte-order-detail',
  standalone: true,
  templateUrl: './order-detail.component.html',
  styleUrl: './order-detail.component.scss',
  imports: [
    AsyncPipe,
    JsonPipe,
    OrderItemComponent,
    KeyValueComponent,
    DatePipe,
    OrderStatusPipe,
    CurrencyPipe,
  ],
})
export class OrderDetailComponent {
  orderFacade: OrderFacade = inject(OrderFacade);
  route: ActivatedRoute = inject(ActivatedRoute);

  order$ = this.route.params.pipe(
    map((params: Params) => params['id']),
    switchMap((id) => this.orderFacade.getOrderById(id))
  );
}
