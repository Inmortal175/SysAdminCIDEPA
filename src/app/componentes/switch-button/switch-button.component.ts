import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'app-switch-button',
    templateUrl: './switch-button.component.html',
    styleUrls: ['./switch-button.component.css'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SwitchButtonComponent),
            multi: true,
        },
    ],
})
export class SwitchButtonComponent implements ControlValueAccessor {
    contenido = true;
    onChange: any = () => {};
    onTouch: any = () => {};

    writeValue(value: boolean): void {
        this.contenido = value;
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouch = fn;
    }

    toggleSwitch(): void {
        this.contenido = !this.contenido;
        this.onChange(this.contenido);
        this.onTouch();
    }
}
