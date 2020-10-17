import { EventEmitter, Component, forwardRef, Input, Output, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';

class NgxNumberSpinnerComponent {
    constructor() {
        this.value = 0;
        this.step = 1;
        this.direction = 'horizontal';
        this.change = new EventEmitter();
        this._propagateChange = () => { };
    }
    writeValue(value) {
        this.value = value || 0;
    }
    registerOnChange(fn) {
        this._propagateChange = fn;
    }
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    inc() {
        this.value += this.step;
        this._onChange();
    }
    dec() {
        this.value -= this.step;
        this._onChange();
    }
    _onChange() {
        this._propagateChange(this.value);
        this.change.emit(this.value);
    }
}
NgxNumberSpinnerComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-number-spinner',
                template: "<div class=\"wrapper\"\n     [ngClass]=\"{ 'horizontal-wrapper': direction === 'horizontal', 'vertical-wrapper': direction === 'vertical' }\">\n    <button type=\"button\"\n            [class.ripple]=\"!min || value > min\"\n            (click)=\"dec()\"\n            [disabled]=\"value <= min\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n          <path d=\"M19 13H5v-2h14v2z\"/><path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n        </svg>\n    </button>\n\n    <div>{{ value }}</div>\n\n    <button type=\"button\"\n            [class.ripple]=\"!max || value < max\"\n            (click)=\"inc()\"\n            [disabled]=\"value >= max\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n          <path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/><path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n        </svg>\n    </button>\n</div>\n",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => NgxNumberSpinnerComponent),
                        multi: true
                    }
                ],
                styles: ["input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.wrapper button{border:0;overflow:hidden;padding:.5rem}.wrapper button:focus{outline:none}.wrapper button:disabled{cursor:not-allowed}.wrapper button:disabled svg{fill:rgba(0,0,0,.26)}.wrapper div{align-items:center;flex:1;font-size:1rem;min-width:30px;padding:0 .5rem;text-align:center;vertical-align:unset}.horizontal-wrapper{border:1px solid rgba(0,0,0,.12);border-radius:8px;display:flex;justify-content:space-between}.horizontal-wrapper button:first-child{border-bottom-left-radius:7px;border-top-left-radius:7px}.horizontal-wrapper button:last-child{border-bottom-right-radius:7px;border-top-right-radius:7px}.horizontal-wrapper div{border-left:1px solid rgba(0,0,0,.12);border-right:1px solid rgba(0,0,0,.12);display:flex;justify-content:center}.vertical-wrapper button:first-child{border:1px solid rgba(0,0,0,.12);border-radius:10px 10px 0 0;width:100%}.vertical-wrapper button:last-child{border:1px solid rgba(0,0,0,.12);border-radius:0 0 10px 10px;width:100%}.vertical-wrapper div{border-left:1px solid rgba(0,0,0,.12);border-right:1px solid rgba(0,0,0,.12);padding:.5rem}.ripple{background-position:50%;transition:background .3s}.ripple:hover{background:rgba(0,0,0,.12) radial-gradient(circle,transparent 1%,rgba(0,0,0,.12) 0) 50%/15000%;cursor:pointer}.ripple:active{background-color:rgba(0,0,0,.12);background-size:100%;transition:background 0s}"]
            },] }
];
NgxNumberSpinnerComponent.ctorParameters = () => [];
NgxNumberSpinnerComponent.propDecorators = {
    value: [{ type: Input, args: ['value',] }],
    step: [{ type: Input, args: ['step',] }],
    min: [{ type: Input, args: ['min',] }],
    max: [{ type: Input, args: ['max',] }],
    direction: [{ type: Input, args: ['direction',] }],
    change: [{ type: Output, args: ['change',] }]
};

class NgxNumberSpinnerModule {
}
NgxNumberSpinnerModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    NgxNumberSpinnerComponent
                ],
                exports: [
                    NgxNumberSpinnerComponent
                ],
                imports: [
                    CommonModule
                ]
            },] }
];

/*
 * Public API Surface of ngx-number-spinner
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxNumberSpinnerComponent, NgxNumberSpinnerModule };
//# sourceMappingURL=ngx-number-spinner.js.map
