(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-number-spinner', ['exports', '@angular/core', '@angular/forms', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['ngx-number-spinner'] = {}, global.ng.core, global.ng.forms, global.ng.common));
}(this, (function (exports, core, forms, common) { 'use strict';

    var NgxNumberSpinnerComponent = /** @class */ (function () {
        function NgxNumberSpinnerComponent() {
            this.value = 0;
            this.step = 1;
            this.direction = 'horizontal';
            this.change = new core.EventEmitter();
            this._propagateChange = function () { };
        }
        NgxNumberSpinnerComponent.prototype.writeValue = function (value) {
            this.value = value || 0;
        };
        NgxNumberSpinnerComponent.prototype.registerOnChange = function (fn) {
            this._propagateChange = fn;
        };
        NgxNumberSpinnerComponent.prototype.registerOnTouched = function (fn) {
            this._onTouched = fn;
        };
        NgxNumberSpinnerComponent.prototype.setDisabledState = function (isDisabled) {
            this.disabled = isDisabled;
        };
        NgxNumberSpinnerComponent.prototype.inc = function () {
            this.value += this.step;
            this._onChange();
        };
        NgxNumberSpinnerComponent.prototype.dec = function () {
            this.value -= this.step;
            this._onChange();
        };
        NgxNumberSpinnerComponent.prototype._onChange = function () {
            this._propagateChange(this.value);
            this.change.emit(this.value);
        };
        return NgxNumberSpinnerComponent;
    }());
    NgxNumberSpinnerComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ngx-number-spinner',
                    template: "<div class=\"wrapper\"\n     [ngClass]=\"{ 'horizontal-wrapper': direction === 'horizontal', 'vertical-wrapper': direction === 'vertical' }\">\n    <button type=\"button\"\n            [class.ripple]=\"!min || value > min\"\n            (click)=\"dec()\"\n            [disabled]=\"value <= min\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n          <path d=\"M19 13H5v-2h14v2z\"/><path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n        </svg>\n    </button>\n\n    <div>{{ value }}</div>\n\n    <button type=\"button\"\n            [class.ripple]=\"!max || value < max\"\n            (click)=\"inc()\"\n            [disabled]=\"value >= max\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n          <path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/><path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n        </svg>\n    </button>\n</div>\n",
                    providers: [
                        {
                            provide: forms.NG_VALUE_ACCESSOR,
                            useExisting: core.forwardRef(function () { return NgxNumberSpinnerComponent; }),
                            multi: true
                        }
                    ],
                    styles: ["input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.wrapper button{border:0;overflow:hidden;padding:.5rem}.wrapper button:focus{outline:none}.wrapper button:disabled{cursor:not-allowed}.wrapper button:disabled svg{fill:rgba(0,0,0,.26)}.wrapper div{align-items:center;flex:1;font-size:1rem;min-width:30px;padding:0 .5rem;text-align:center;vertical-align:unset}.horizontal-wrapper{border:1px solid rgba(0,0,0,.12);border-radius:8px;display:flex;justify-content:space-between}.horizontal-wrapper button:first-child{border-bottom-left-radius:7px;border-top-left-radius:7px}.horizontal-wrapper button:last-child{border-bottom-right-radius:7px;border-top-right-radius:7px}.horizontal-wrapper div{border-left:1px solid rgba(0,0,0,.12);border-right:1px solid rgba(0,0,0,.12);display:flex;justify-content:center}.vertical-wrapper button:first-child{border:1px solid rgba(0,0,0,.12);border-radius:10px 10px 0 0;width:100%}.vertical-wrapper button:last-child{border:1px solid rgba(0,0,0,.12);border-radius:0 0 10px 10px;width:100%}.vertical-wrapper div{border-left:1px solid rgba(0,0,0,.12);border-right:1px solid rgba(0,0,0,.12);padding:.5rem}.ripple{background-position:50%;transition:background .3s}.ripple:hover{background:rgba(0,0,0,.12) radial-gradient(circle,transparent 1%,rgba(0,0,0,.12) 0) 50%/15000%;cursor:pointer}.ripple:active{background-color:rgba(0,0,0,.12);background-size:100%;transition:background 0s}"]
                },] }
    ];
    NgxNumberSpinnerComponent.ctorParameters = function () { return []; };
    NgxNumberSpinnerComponent.propDecorators = {
        value: [{ type: core.Input, args: ['value',] }],
        step: [{ type: core.Input, args: ['step',] }],
        min: [{ type: core.Input, args: ['min',] }],
        max: [{ type: core.Input, args: ['max',] }],
        direction: [{ type: core.Input, args: ['direction',] }],
        change: [{ type: core.Output, args: ['change',] }]
    };

    var NgxNumberSpinnerModule = /** @class */ (function () {
        function NgxNumberSpinnerModule() {
        }
        return NgxNumberSpinnerModule;
    }());
    NgxNumberSpinnerModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [
                        NgxNumberSpinnerComponent
                    ],
                    exports: [
                        NgxNumberSpinnerComponent
                    ],
                    imports: [
                        common.CommonModule
                    ]
                },] }
    ];

    /*
     * Public API Surface of ngx-number-spinner
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.NgxNumberSpinnerComponent = NgxNumberSpinnerComponent;
    exports.NgxNumberSpinnerModule = NgxNumberSpinnerModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-number-spinner.umd.js.map
