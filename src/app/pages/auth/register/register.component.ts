import { Component, OnDestroy, inject } from '@angular/core';
import { AuthHeadComponent } from '../auth-head/auth-head.component';
import { InputComponent } from '../../../components/input/input.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonComponent } from '../../../ui/button/button.component';
import {
  AuthPayload,
  AuthResponce,
} from '../../../core/interfaces/auth-payload';
import { Subject, catchError, takeUntil, throwError } from 'rxjs';
import { AuthFacade } from '../../../facades';
import { ToastComponent } from '../../../components/toast/toast.component';
import { Router } from '@angular/router';

@Component({
  selector: 'alte-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['../auth.styles.scss', './register.component.scss'],
  imports: [
    AuthHeadComponent,
    InputComponent,
    ReactiveFormsModule,
    ButtonComponent,
    ToastComponent,
  ],
})
export class RegisterComponent implements OnDestroy {
  form: FormGroup = new FormGroup({
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    password: new FormControl<string>('', Validators.required),
  });

  authFacade: AuthFacade = inject(AuthFacade);
  router = inject(Router);

  errorMessage: string | null = null;
  successMessage: string | null = null;

  sub$ = new Subject();

  submit() {
    console.log(this.form.value);
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      return;
    }

    this.errorMessage = null;
    this.successMessage = null;

    const { email, password } = this.form.value as {
      email: string;
      password: string;
    };

    email.trim();
    password.trim();

    const payload: AuthPayload = {
      email,
      password,
    };

    this.authFacade
      .register(payload)
      .pipe(
        takeUntil(this.sub$),
        catchError(({ error }) => {
          this.errorMessage = error.error.message;
          return throwError(() => error.error.message);
        })
      )
      .subscribe((res: AuthResponce) => {
        if (res) {
          this.successMessage =
            'You are registered successfully! Redirecting to main page...';
          setTimeout(() => {
            this.router.navigate(['/']);
          }, 2000);
        }
      });
  }

  ngOnDestroy(): void {
    this.sub$.next(null);
    this.sub$.complete();
  }
}
