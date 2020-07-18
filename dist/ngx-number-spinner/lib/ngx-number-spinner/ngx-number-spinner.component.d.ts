import { EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NgxNumberSpinnerComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<NgxNumberSpinnerComponent, "ngx-number-spinner", never, { "value": "value"; "step": "step"; "direction": "direction"; "min": "min"; "max": "max"; }, { "change": "change"; }, never, never>;
}

//# sourceMappingURL=ngx-number-spinner.component.d.ts.map