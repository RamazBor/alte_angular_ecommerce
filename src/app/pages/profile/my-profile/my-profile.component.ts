import { Component, inject } from '@angular/core';
import { AuthFacade } from '../../../facades';
import { Observable } from 'rxjs';
import { User } from '../../../core/interfaces';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'alte-my-profile',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.scss',
})
export class MyProfileComponent {
  authFacade: AuthFacade = inject(AuthFacade);

  user$: Observable<User> = this.authFacade.getUser();
}
