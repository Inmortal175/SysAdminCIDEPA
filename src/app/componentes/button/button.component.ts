import { Component, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: ButtonComponent,
    },
  ],
})
export class ButtonComponent implements ControlValueAccessor {
  @Input() btn_class = 'btn-warning';
  @Input() icon_class = 'fa-user-alt';
  @Input() buttonName = 'Custom Buttom';
  @Input() addClass = '';

  registerOnChange(fn: any): void {}

  registerOnTouched(fn: any): void {}

  writeValue(obj: any): void {}
}
