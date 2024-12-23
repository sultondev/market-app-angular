import { CommonModule } from '@angular/common';
import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input() label!: string;
  @Input() type: string = 'text';
  @Input() placeholder!: string;
  @Input() class!: string;
  @Input() inputClass: string = '';
  @Input() wrapperClass: string = '';
  @Input() labelClass: string = '';
  @Input() templateClass: string = '';
  // Internal value for two-way binding
  value: string = '';

  // Function placeholders for ControlValueAccessor
  onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};

  // Write the value to the input
  writeValue(value: string): void {
    if (value !== undefined) {
      this.value = value;
    }
  }

  // Register onChange function
  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  // Register onTouched function
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  // Handle value change from the input field
  onValueChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.onChange(this.value); // Notify Angular forms about the value change
  }
}
