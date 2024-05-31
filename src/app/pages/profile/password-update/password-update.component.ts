import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthFacade } from '../../../facades';
import { InputComponent } from '../../../components/input/input.component';
import { ToastComponent } from '../../../components/toast/toast.component';
import { ButtonComponent } from '../../../ui/button/button.component';
import { confirmPasswordValidator } from '../../../core/validators/confirm-password.validator';
import { NgIf } from '@angular/common';

@Component({
  selector: 'alte-password-update',
  standalone: true,
  templateUrl: './password-update.component.html',
  styleUrl: './password-update.component.scss',
  imports: [
    InputComponent,
    ToastComponent,
    ReactiveFormsModule,
    ButtonComponent,
    NgIf,
  ],
})
export class PasswordUpdateComponent {
  form = new FormGroup(
    {
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/),
      ]),
      confirmPassword: new FormControl('', Validators.required),
    },
    { validators: confirmPasswordValidator }
  );

  authFacade = inject(AuthFacade);

  submit() {
    this.form.markAllAsTouched();

    if (this.form.invalid) {
      return;
    }
    const password = this.form.value.password as string;

    this.authFacade.changePassword(password).subscribe(() => {
      this.form.reset();
    });
  }
}
