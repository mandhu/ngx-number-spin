(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-number-spinner', ['exports', '@angular/core', '@angular/forms', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['ngx-number-spinner'] = {}, global.ng.core, global.ng.forms, global.ng.common));
}(this, (function (exports, i0, forms, i1) { 'use strict';

    var _c0 = function (a0, a1) { return { "horizontal-wrapper": a0, "vertical-wrapper": a1 }; };
    var NgxNumberSpinnerComponent = /** @class */ (function () {
        function NgxNumberSpinnerComponent() {
            this.value = 0;
            this.step = 1;
            this.direction = 'horizontal';
            this.change = new i0.EventEmitter();
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
    NgxNumberSpinnerComponent.ɵfac = function NgxNumberSpinnerComponent_Factory(t) { return new (t || NgxNumberSpinnerComponent)(); };
    NgxNumberSpinnerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NgxNumberSpinnerComponent, selectors: [["ngx-number-spinner"]], inputs: { value: "value", step: "step", min: "min", max: "max", direction: "direction" }, outputs: { change: "change" }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: forms.NG_VALUE_ACCESSOR,
                    useExisting: i0.forwardRef(function () { return NgxNumberSpinnerComponent; }),
                    multi: true
                }
            ])], decls: 11, vars: 11, consts: [[1, "wrapper", 3, "ngClass"], ["type", "button", 3, "disabled", "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24"], ["d", "M19 13H5v-2h14v2z"], ["d", "M0 0h24v24H0z", "fill", "none"], ["d", "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"]], template: function NgxNumberSpinnerComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "button", 1);
                i0.ɵɵlistener("click", function NgxNumberSpinnerComponent_Template_button_click_1_listener() { return ctx.dec(); });
                i0.ɵɵnamespaceSVG();
                i0.ɵɵelementStart(2, "svg", 2);
                i0.ɵɵelement(3, "path", 3);
                i0.ɵɵelement(4, "path", 4);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵnamespaceHTML();
                i0.ɵɵelementStart(5, "div");
                i0.ɵɵtext(6);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(7, "button", 1);
                i0.ɵɵlistener("click", function NgxNumberSpinnerComponent_Template_button_click_7_listener() { return ctx.inc(); });
                i0.ɵɵnamespaceSVG();
                i0.ɵɵelementStart(8, "svg", 2);
                i0.ɵɵelement(9, "path", 5);
                i0.ɵɵelement(10, "path", 4);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(8, _c0, ctx.direction === "horizontal", ctx.direction === "vertical"));
                i0.ɵɵadvance(1);
                i0.ɵɵclassProp("ripple", !ctx.min || ctx.value > ctx.min);
                i0.ɵɵproperty("disabled", ctx.value <= ctx.min);
                i0.ɵɵadvance(5);
                i0.ɵɵtextInterpolate(ctx.value);
                i0.ɵɵadvance(1);
                i0.ɵɵclassProp("ripple", !ctx.max || ctx.value < ctx.max);
                i0.ɵɵproperty("disabled", ctx.value >= ctx.max);
            }
        }, directives: [i1.NgClass], styles: ["input[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.wrapper[_ngcontent-%COMP%]{max-width:200px}.wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:0;overflow:hidden;padding:.5rem}.wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus{outline:none}.wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{cursor:not-allowed}.wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled   svg[_ngcontent-%COMP%]{fill:rgba(0,0,0,.26)}.wrapper[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{align-items:center;flex:1;font-size:1rem;min-width:30px;padding:0 .5rem;text-align:center;vertical-align:unset}.horizontal-wrapper[_ngcontent-%COMP%]{border:1px solid rgba(0,0,0,.12);border-radius:8px;display:flex;justify-content:space-between}.horizontal-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child{border-bottom-left-radius:7px;border-top-left-radius:7px}.horizontal-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child{border-bottom-right-radius:7px;border-top-right-radius:7px}.horizontal-wrapper[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{border-left:1px solid rgba(0,0,0,.12);border-right:1px solid rgba(0,0,0,.12);display:flex;justify-content:center}.vertical-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child{border:1px solid rgba(0,0,0,.12);border-radius:10px 10px 0 0;width:100%}.vertical-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child{border:1px solid rgba(0,0,0,.12);border-radius:0 0 10px 10px;width:100%}.vertical-wrapper[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{border-left:1px solid rgba(0,0,0,.12);border-right:1px solid rgba(0,0,0,.12);padding:.5rem}.ripple[_ngcontent-%COMP%]{background-position:50%;transition:background .3s}.ripple[_ngcontent-%COMP%]:hover{background:rgba(0,0,0,.12) radial-gradient(circle,transparent 1%,rgba(0,0,0,.12) 0) 50%/15000%;cursor:pointer}.ripple[_ngcontent-%COMP%]:active{background-color:rgba(0,0,0,.12);background-size:100%;transition:background 0s}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(NgxNumberSpinnerComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'ngx-number-spinner',
                        templateUrl: './ngx-number-spinner.component.html',
                        styleUrls: [
                            './ngx-number-spinner.component.scss'
                        ],
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: i0.forwardRef(function () { return NgxNumberSpinnerComponent; }),
                                multi: true
                            }
                        ]
                    }]
            }], function () { return []; }, { value: [{
                    type: i0.Input,
                    args: ['value']
                }], step: [{
                    type: i0.Input,
                    args: ['step']
                }], min: [{
                    type: i0.Input,
                    args: ['min']
                }], max: [{
                    type: i0.Input,
                    args: ['max']
                }], direction: [{
                    type: i0.Input,
                    args: ['direction']
                }], change: [{
                    type: i0.Output,
                    args: ['change']
                }] });
    })();

    var NgxNumberSpinnerModule = /** @class */ (function () {
        function NgxNumberSpinnerModule() {
        }
        return NgxNumberSpinnerModule;
    }());
    NgxNumberSpinnerModule.ɵmod = i0.ɵɵdefineNgModule({ type: NgxNumberSpinnerModule });
    NgxNumberSpinnerModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NgxNumberSpinnerModule_Factory(t) { return new (t || NgxNumberSpinnerModule)(); }, imports: [[
                i1.CommonModule
            ]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NgxNumberSpinnerModule, { declarations: [NgxNumberSpinnerComponent], imports: [i1.CommonModule], exports: [NgxNumberSpinnerComponent] }); })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(NgxNumberSpinnerModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            NgxNumberSpinnerComponent
                        ],
                        exports: [
                            NgxNumberSpinnerComponent
                        ],
                        imports: [
                            i1.CommonModule
                        ]
                    }]
            }], null, null);
    })();

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
