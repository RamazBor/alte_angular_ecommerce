import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { AuthHeadComponent } from '../auth-head/auth-head.component';
import { InputComponent } from '../../../components/input/input.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonComponent } from '../../../ui/button/button.component';
import { AuthFacade } from '../../../facades';
import { ActivatedRoute, Params } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'alte-recovery',
  standalone: true,
  templateUrl: './recovery.component.html',
  styleUrls: ['../auth.styles.scss', './recovery.component.scss'],
  imports: [
    AuthHeadComponent,
    InputComponent,
    ReactiveFormsModule,
    ButtonComponent,
  ],
})
export class RecoveryComponent implements OnInit, OnDestroy {
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  authFacade: AuthFacade = inject(AuthFacade);
  route: ActivatedRoute = inject(ActivatedRoute);

  sub$ = new Subject();

  oobCode: string | null = null;

  ngOnInit(): void {
    this.route.queryParams
      .pipe(takeUntil(this.sub$))
      .subscribe((params: Params) => {
        if (params['oobCode']) {
          console.log('oobCode', params['oobCode']);
          this.oobCode = params['oobCode'];
        }
      });
  }

  sendLink() {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      return;
    }

    this.authFacade
      .sendOobCode(this.form.value.email as string)
      .subscribe((res) => {
        console.log('Email sent', res);
      });
  }

  ngOnDestroy(): void {
    this.sub$.next(null);
    this.sub$.complete();
  }
}
