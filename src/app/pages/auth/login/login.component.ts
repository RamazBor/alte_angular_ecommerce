import { Component, inject } from '@angular/core';
import { AuthHeadComponent } from '../auth-head/auth-head.component';
import { InputComponent } from '../../../components/input/input.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { ButtonComponent } from '../../../ui/button/button.component';
import { Router, RouterLink } from '@angular/router';
import { AuthFacade } from '../../../facades';
import {
  AuthPayload,
  AuthResponce,
} from '../../../core/interfaces/auth-payload';
import { ToastComponent } from '../../../components/toast/toast.component';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'alte-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['../auth.styles.scss', './login.component.scss'],
  imports: [
    ButtonComponent,
    JsonPipe,
    AuthHeadComponent,
    InputComponent,
    ReactiveFormsModule,
    RouterLink,
    ToastComponent,
  ],
})
export class LoginComponent {
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  errorMessage: string | null = null;
  successMessage: string | null = null;

  authFacade = inject(AuthFacade);
  router = inject(Router);

  submit() {
    console.log(this.form);
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      return;
    }

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
      .login(payload)
      .pipe(
        catchError(({ error }) => {
          this.errorMessage = error.error.message;
          return throwError(() => error.error.message);
        })
      )
      .subscribe((res: AuthResponce) => {
        console.log(res);
        if (res) {
          this.successMessage = 'Login successfull';
          setTimeout(() => {
            this.router.navigate(['/']);
          }, 2000);
        }
      });
  }
}
