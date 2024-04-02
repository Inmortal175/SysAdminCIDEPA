import { Component, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: InputComponent,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input() type!: string;
  @Input() label_field!: string;

  content = '';

  private onChange!: Function;

  changeText($event: any) {
    this.onChange($event.target.value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {}

  writeValue(value: string): void {
    this.content = value;
  }
}
