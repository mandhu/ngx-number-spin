import { Component, Input, EventEmitter, Output, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'ngx-number-spin',
    templateUrl: './ngx-number-spin.component.html',
    styleUrls: ['./ngx-number-spin.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => NgxNumberSpinComponent),
            multi: true
        }
    ]
})
export class NgxNumberSpinComponent implements ControlValueAccessor {

    @Output('change') change: EventEmitter<number> = new EventEmitter();
    
    @Input('value') value: number = 0;
    @Input('step') step: number = 1;
    @Input('min') min: number;
    @Input('max') max: number;

    disabled: boolean;
    
    _propagateChange:any = () => {};
    _onTouched: () => void;

    constructor() { }
  
    writeValue(value: number): void {
        this.value = value || 0;
    }

    registerOnChange(fn: any): void {
        this._propagateChange = fn
    }

    registerOnTouched(fn: any): void {
        this._onTouched = fn;
    }

    setDisabledState?(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }
  
    inc() {
        this.value+= this.step;
        this._onChange();
    }
  
    dec() {
        this.value-=this.step;
        this._onChange();
    }

    private _onChange() {
        this._propagateChange(this.value);
        this.change.emit(this.value);
    }

}
