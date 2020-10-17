import { EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class NgxNumberSpinnerComponent implements ControlValueAccessor {
    value: number;
    step: number;
    min: number;
    max: number;
    direction: 'horizontal' | 'vertical';
    change: EventEmitter<number>;
    disabled: boolean;
    _propagateChange: any;
    _onTouched: () => void;
    constructor();
    writeValue(value: number): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState?(isDisabled: boolean): void;
    inc(): void;
    dec(): void;
    private _onChange;
}
