import { Component, Input, forwardRef, input } from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

let uniqueId: number = 1;

@Component({
  selector: 'alte-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input() type: 'text' | 'password' | 'number' | 'email' = 'text';
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Input() autocomplete: string = '';

  value: string = '';

  disabled: boolean = false;

  get inputId(): string {
    return `input-${uniqueId++}`;
  }

  onChange = (value: string) => {};

  onTouched = () => {};

  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
