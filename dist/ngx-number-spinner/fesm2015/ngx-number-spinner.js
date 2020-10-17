import { EventEmitter, ɵɵdefineComponent, ɵɵProvidersFeature, forwardRef, ɵɵelementStart, ɵɵlistener, ɵɵnamespaceSVG, ɵɵelement, ɵɵelementEnd, ɵɵnamespaceHTML, ɵɵtext, ɵɵproperty, ɵɵpureFunction2, ɵɵadvance, ɵɵclassProp, ɵɵtextInterpolate, ɵsetClassMetadata, Component, Input, Output, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgClass, CommonModule } from '@angular/common';

const _c0 = function (a0, a1) { return { "horizontal-wrapper": a0, "vertical-wrapper": a1 }; };
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
NgxNumberSpinnerComponent.ɵfac = function NgxNumberSpinnerComponent_Factory(t) { return new (t || NgxNumberSpinnerComponent)(); };
NgxNumberSpinnerComponent.ɵcmp = ɵɵdefineComponent({ type: NgxNumberSpinnerComponent, selectors: [["ngx-number-spinner"]], inputs: { value: "value", step: "step", min: "min", max: "max", direction: "direction" }, outputs: { change: "change" }, features: [ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => NgxNumberSpinnerComponent),
                multi: true
            }
        ])], decls: 11, vars: 11, consts: [[1, "wrapper", 3, "ngClass"], ["type", "button", 3, "disabled", "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24"], ["d", "M19 13H5v-2h14v2z"], ["d", "M0 0h24v24H0z", "fill", "none"], ["d", "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"]], template: function NgxNumberSpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "button", 1);
        ɵɵlistener("click", function NgxNumberSpinnerComponent_Template_button_click_1_listener() { return ctx.dec(); });
        ɵɵnamespaceSVG();
        ɵɵelementStart(2, "svg", 2);
        ɵɵelement(3, "path", 3);
        ɵɵelement(4, "path", 4);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵnamespaceHTML();
        ɵɵelementStart(5, "div");
        ɵɵtext(6);
        ɵɵelementEnd();
        ɵɵelementStart(7, "button", 1);
        ɵɵlistener("click", function NgxNumberSpinnerComponent_Template_button_click_7_listener() { return ctx.inc(); });
        ɵɵnamespaceSVG();
        ɵɵelementStart(8, "svg", 2);
        ɵɵelement(9, "path", 5);
        ɵɵelement(10, "path", 4);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("ngClass", ɵɵpureFunction2(8, _c0, ctx.direction === "horizontal", ctx.direction === "vertical"));
        ɵɵadvance(1);
        ɵɵclassProp("ripple", !ctx.min || ctx.value > ctx.min);
        ɵɵproperty("disabled", ctx.value <= ctx.min);
        ɵɵadvance(5);
        ɵɵtextInterpolate(ctx.value);
        ɵɵadvance(1);
        ɵɵclassProp("ripple", !ctx.max || ctx.value < ctx.max);
        ɵɵproperty("disabled", ctx.value >= ctx.max);
    } }, directives: [NgClass], styles: ["input[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.wrapper[_ngcontent-%COMP%]{max-width:200px}.wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:0;overflow:hidden;padding:.5rem}.wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus{outline:none}.wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{cursor:not-allowed}.wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled   svg[_ngcontent-%COMP%]{fill:rgba(0,0,0,.26)}.wrapper[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{align-items:center;flex:1;font-size:1rem;min-width:30px;padding:0 .5rem;text-align:center;vertical-align:unset}.horizontal-wrapper[_ngcontent-%COMP%]{border:1px solid rgba(0,0,0,.12);border-radius:8px;display:flex;justify-content:space-between}.horizontal-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child{border-bottom-left-radius:7px;border-top-left-radius:7px}.horizontal-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child{border-bottom-right-radius:7px;border-top-right-radius:7px}.horizontal-wrapper[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{border-left:1px solid rgba(0,0,0,.12);border-right:1px solid rgba(0,0,0,.12);display:flex;justify-content:center}.vertical-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child{border:1px solid rgba(0,0,0,.12);border-radius:10px 10px 0 0;width:100%}.vertical-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child{border:1px solid rgba(0,0,0,.12);border-radius:0 0 10px 10px;width:100%}.vertical-wrapper[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{border-left:1px solid rgba(0,0,0,.12);border-right:1px solid rgba(0,0,0,.12);padding:.5rem}.ripple[_ngcontent-%COMP%]{background-position:50%;transition:background .3s}.ripple[_ngcontent-%COMP%]:hover{background:rgba(0,0,0,.12) radial-gradient(circle,transparent 1%,rgba(0,0,0,.12) 0) 50%/15000%;cursor:pointer}.ripple[_ngcontent-%COMP%]:active{background-color:rgba(0,0,0,.12);background-size:100%;transition:background 0s}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(NgxNumberSpinnerComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-number-spinner',
                templateUrl: './ngx-number-spinner.component.html',
                styleUrls: [
                    './ngx-number-spinner.component.scss'
                ],
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => NgxNumberSpinnerComponent),
                        multi: true
                    }
                ]
            }]
    }], function () { return []; }, { value: [{
            type: Input,
            args: ['value']
        }], step: [{
            type: Input,
            args: ['step']
        }], min: [{
            type: Input,
            args: ['min']
        }], max: [{
            type: Input,
            args: ['max']
        }], direction: [{
            type: Input,
            args: ['direction']
        }], change: [{
            type: Output,
            args: ['change']
        }] }); })();

class NgxNumberSpinnerModule {
}
NgxNumberSpinnerModule.ɵmod = ɵɵdefineNgModule({ type: NgxNumberSpinnerModule });
NgxNumberSpinnerModule.ɵinj = ɵɵdefineInjector({ factory: function NgxNumberSpinnerModule_Factory(t) { return new (t || NgxNumberSpinnerModule)(); }, imports: [[
            CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(NgxNumberSpinnerModule, { declarations: [NgxNumberSpinnerComponent], imports: [CommonModule], exports: [NgxNumberSpinnerComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(NgxNumberSpinnerModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    NgxNumberSpinnerComponent
                ],
                exports: [
                    NgxNumberSpinnerComponent
                ],
                imports: [
                    CommonModule
                ]
            }]
    }], null, null); })();

/*
 * Public API Surface of ngx-number-spinner
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxNumberSpinnerComponent, NgxNumberSpinnerModule };
//# sourceMappingURL=ngx-number-spinner.js.map
