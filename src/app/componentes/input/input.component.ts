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
    constructor() {
        this.registerOnChange((value: any) => {
            this.content = value;
        });
    }
    @Input() type!: string;
    @Input() label_field!: string;
    @Input() invalidFeedBack = 'Escribe un feed back';
    @Input() ngClass: any;
    @Input() IsDisabled!: boolean;

    content = '';

    private _onChange!: (arg: any) => void;

    changeText($event: any) {
        this._onChange($event.target.value);
    }

    registerOnChange(fn: any): void {
        this._onChange = fn;
    }

    registerOnTouched(fn: any): void {}

    writeValue(value: string): void {
        this.content = value;
    }
}
