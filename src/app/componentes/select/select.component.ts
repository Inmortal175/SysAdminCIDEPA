import { Component } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { selectValues } from 'src/app/models/select-model';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: SelectComponent
    }
  ]
})
export class SelectComponent implements ControlValueAccessor {

  private onChange!: Function;
  value = ""

  listContent!: selectValues[];

  valueChange($event: any) {
    // this.onChange($event.target.value)
    this.value = $event.target.value.toString()
    console.log($event.target)
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {

  }

  writeValue(value: string): void {
      this.value = value
  }
}
