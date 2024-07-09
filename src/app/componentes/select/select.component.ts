import { Component, Input } from '@angular/core';
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
            useExisting: SelectComponent,
        },
    ],
})
export class SelectComponent implements ControlValueAccessor {
    constructor() {
        this.registerOnChange((value: any) => {
            this.value = value;
        });
    }
    @Input() label_field!: string;
    @Input() ngClass!: any;
    @Input() feedBack = 'choose a feedback';

    private onChange!: (arg: any) => void;
    value = '';

    listContent!: selectValues[];

    valueChange($event: any) {
        const Valor = $event.target.value.toString();
        this.onChange(Valor);
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {}

    writeValue(value: string): void {
        this.value = value;
    }
}
