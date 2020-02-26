(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-number-spinner', ['exports', '@angular/core', '@angular/forms', '@angular/common'], factory) :
    (global = global || self, factory(global['ngx-number-spinner'] = {}, global.ng.core, global.ng.forms, global.ng.common));
}(this, (function (exports, core, forms, common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ngx-number-spinner/ngx-number-spinner.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxNumberSpinnerComponent = /** @class */ (function () {
        function NgxNumberSpinnerComponent() {
            this.value = 0;
            this.step = 1;
            this.direction = 'horizontal';
            this.change = new core.EventEmitter();
            this._propagateChange = (/**
             * @return {?}
             */
            function () { });
        }
        /**
         * @param {?} value
         * @return {?}
         */
        NgxNumberSpinnerComponent.prototype.writeValue = /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.value = value || 0;
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        NgxNumberSpinnerComponent.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this._propagateChange = fn;
        };
        /**
         * @param {?} fn
         * @return {?}
         */
        NgxNumberSpinnerComponent.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
        function (fn) {
            this._onTouched = fn;
        };
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        NgxNumberSpinnerComponent.prototype.setDisabledState = /**
         * @param {?} isDisabled
         * @return {?}
         */
        function (isDisabled) {
            this.disabled = isDisabled;
        };
        /**
         * @return {?}
         */
        NgxNumberSpinnerComponent.prototype.inc = /**
         * @return {?}
         */
        function () {
            this.value += this.step;
            this._onChange();
        };
        /**
         * @return {?}
         */
        NgxNumberSpinnerComponent.prototype.dec = /**
         * @return {?}
         */
        function () {
            this.value -= this.step;
            this._onChange();
        };
        /**
         * @private
         * @return {?}
         */
        NgxNumberSpinnerComponent.prototype._onChange = /**
         * @private
         * @return {?}
         */
        function () {
            this._propagateChange(this.value);
            this.change.emit(this.value);
        };
        NgxNumberSpinnerComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ngx-number-spinner',
                        template: "<div class=\"wrapper\"\n     [ngClass]=\"{ 'horizontal-wrapper': direction === 'horizontal', 'vertical-wrapper': direction === 'vertical' }\">\n    <button type=\"button\"\n            [class.ripple]=\"!min || value > min\"\n            (click)=\"dec()\"\n            [disabled]=\"value <= min\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n          <path d=\"M19 13H5v-2h14v2z\"/><path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n        </svg>\n    </button>\n\n    <div>{{ value }}</div>\n\n    <button type=\"button\"\n            [class.ripple]=\"!max || value < max\"\n            (click)=\"inc()\"\n            [disabled]=\"value >= max\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n          <path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/><path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n        </svg>\n    </button>\n</div>\n",
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core.forwardRef((/**
                                 * @return {?}
                                 */
                                function () { return NgxNumberSpinnerComponent; })),
                                multi: true
                            }
                        ],
                        styles: ["input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.wrapper{max-width:200px}.wrapper button{padding:.5rem;overflow:hidden;border:0}.wrapper button:focus{outline:0}.wrapper button:disabled{cursor:not-allowed}.wrapper button:disabled svg{fill:rgba(0,0,0,.26)}.wrapper div{-webkit-box-align:center;align-items:center;padding:0 .5rem;font-size:1rem;-webkit-box-flex:1;flex:1;min-width:30px;text-align:center;vertical-align:unset}.horizontal-wrapper{display:-webkit-box;display:flex;border:1px solid rgba(0,0,0,.12);-webkit-box-pack:justify;justify-content:space-between;border-radius:8px}.horizontal-wrapper button:first-child{border-top-left-radius:7px;border-bottom-left-radius:7px}.horizontal-wrapper button:last-child{border-top-right-radius:7px;border-bottom-right-radius:7px}.horizontal-wrapper div{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;border-left:1px solid rgba(0,0,0,.12);border-right:1px solid rgba(0,0,0,.12)}.vertical-wrapper button:first-child{border:1px solid rgba(0,0,0,.12);border-radius:10px 10px 0 0;width:100%}.vertical-wrapper button:last-child{border:1px solid rgba(0,0,0,.12);border-radius:0 0 10px 10px;width:100%}.vertical-wrapper div{border-left:1px solid rgba(0,0,0,.12);border-right:1px solid rgba(0,0,0,.12);padding:.5rem}.ripple{background-position:center;-webkit-transition:background .3s;transition:background .3s}.ripple:hover{cursor:pointer;background:radial-gradient(circle,transparent 1%,rgba(0,0,0,.12) 1%) center/15000% rgba(0,0,0,.12)}.ripple:active{background-color:rgba(0,0,0,.12);background-size:100%;-webkit-transition:background;transition:background}"]
                    }] }
        ];
        /** @nocollapse */
        NgxNumberSpinnerComponent.ctorParameters = function () { return []; };
        NgxNumberSpinnerComponent.propDecorators = {
            value: [{ type: core.Input, args: ['value',] }],
            step: [{ type: core.Input, args: ['step',] }],
            min: [{ type: core.Input, args: ['min',] }],
            max: [{ type: core.Input, args: ['max',] }],
            direction: [{ type: core.Input, args: ['direction',] }],
            change: [{ type: core.Output, args: ['change',] }]
        };
        return NgxNumberSpinnerComponent;
    }());
    if (false) {
        /** @type {?} */
        NgxNumberSpinnerComponent.prototype.value;
        /** @type {?} */
        NgxNumberSpinnerComponent.prototype.step;
        /** @type {?} */
        NgxNumberSpinnerComponent.prototype.min;
        /** @type {?} */
        NgxNumberSpinnerComponent.prototype.max;
        /** @type {?} */
        NgxNumberSpinnerComponent.prototype.direction;
        /** @type {?} */
        NgxNumberSpinnerComponent.prototype.change;
        /** @type {?} */
        NgxNumberSpinnerComponent.prototype.disabled;
        /** @type {?} */
        NgxNumberSpinnerComponent.prototype._propagateChange;
        /** @type {?} */
        NgxNumberSpinnerComponent.prototype._onTouched;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/ngx-number-spinner.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgxNumberSpinnerModule = /** @class */ (function () {
        function NgxNumberSpinnerModule() {
        }
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
        return NgxNumberSpinnerModule;
    }());

    exports.NgxNumberSpinnerComponent = NgxNumberSpinnerComponent;
    exports.NgxNumberSpinnerModule = NgxNumberSpinnerModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-number-spinner.umd.js.map
