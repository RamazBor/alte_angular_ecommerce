import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthFacade } from '../../../facades';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, catchError, takeUntil, throwError } from 'rxjs';
import { ToastComponent } from '../../../components/toast/toast.component';
import { AuthHeadComponent } from '../auth-head/auth-head.component';
import { InputComponent } from '../../../components/input/input.component';
import { ButtonComponent } from '../../../ui/button/button.component';

@Component({
  selector: 'alte-recovery-verify',
  standalone: true,
  templateUrl: './recovery-verify.component.html',
  styleUrls: ['../auth.styles.scss', './recovery-verify.component.scss'],
  imports: [
    ToastComponent,
    AuthHeadComponent,
    ReactiveFormsModule,
    InputComponent,
    ButtonComponent,
  ],
})
export class RecoveryVerifyComponent {
  form = new FormGroup({
    oobCode: new FormControl('', [Validators.required]),
    newPassword: new FormControl('', [Validators.required]),
  });

  authFacade = inject(AuthFacade);
  route = inject(ActivatedRoute);
  router = inject(Router);

  sub$ = new Subject();

  errorMessage: string | null = null;
  successMessage: string | null = null;

  ngOnInit() {
    this.route.queryParams.pipe(takeUntil(this.sub$)).subscribe((params) => {
      if (params['oobCode']) {
        this.form.patchValue({
          oobCode: params['oobCode'],
        });
      }
    });
  }

  resetPassword() {
    this.form.markAllAsTouched();
    if (this.form.invalid) {
      return;
    }
    const { oobCode, newPassword } = this.form.value as {
      oobCode: string;
      newPassword: string;
    };

    this.authFacade
      .resetPassword(oobCode, newPassword)
      .pipe(
        takeUntil(this.sub$),
        catchError(({ error }) => {
          this.errorMessage = error.error.message;
          return throwError(() => error.error.message);
        })
      )
      .subscribe((res) => {
        this.successMessage =
          'Password reset successfully. Redirecting to login page.';
        setTimeout(() => {
          this.router.navigate(['/auth']);
        }, 2000);
      });
  }

  ngOnDestroy() {
    this.sub$.next(null);
    this.sub$.complete();
  }
}
