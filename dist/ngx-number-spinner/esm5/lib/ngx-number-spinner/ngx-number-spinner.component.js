/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-number-spinner/ngx-number-spinner.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, Output, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
var NgxNumberSpinnerComponent = /** @class */ (function () {
    function NgxNumberSpinnerComponent() {
        this.value = 0;
        this.step = 1;
        this.direction = 'horizontal';
        this.change = new EventEmitter();
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
        { type: Component, args: [{
                    selector: 'ngx-number-spinner',
                    template: "<div class=\"wrapper\"\n     [ngClass]=\"{ 'horizontal-wrapper': direction === 'horizontal', 'vertical-wrapper': direction === 'vertical' }\">\n    <button type=\"button\"\n            [class.ripple]=\"!min || value > min\"\n            (click)=\"dec()\"\n            [disabled]=\"value <= min\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n          <path d=\"M19 13H5v-2h14v2z\"/><path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n        </svg>\n    </button>\n\n    <div>{{ value }}</div>\n\n    <button type=\"button\"\n            [class.ripple]=\"!max || value < max\"\n            (click)=\"inc()\"\n            [disabled]=\"value >= max\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\">\n          <path d=\"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z\"/><path d=\"M0 0h24v24H0z\" fill=\"none\"/>\n        </svg>\n    </button>\n</div>\n",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
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
        value: [{ type: Input, args: ['value',] }],
        step: [{ type: Input, args: ['step',] }],
        min: [{ type: Input, args: ['min',] }],
        max: [{ type: Input, args: ['max',] }],
        direction: [{ type: Input, args: ['direction',] }],
        change: [{ type: Output, args: ['change',] }]
    };
    return NgxNumberSpinnerComponent;
}());
export { NgxNumberSpinnerComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW51bWJlci1zcGlubmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1udW1iZXItc3Bpbm5lci8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtbnVtYmVyLXNwaW5uZXIvbmd4LW51bWJlci1zcGlubmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25GLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RTtJQTRCRTtRQWJnQixVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ25CLFNBQUksR0FBVyxDQUFDLENBQUM7UUFHWixjQUFTLEdBQTRCLFlBQVksQ0FBQztRQUVwRCxXQUFNLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFJcEUscUJBQWdCOzs7UUFBTyxjQUFPLENBQUMsRUFBQztJQUdoQixDQUFDOzs7OztJQUVqQiw4Q0FBVTs7OztJQUFWLFVBQVcsS0FBWTtRQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCxvREFBZ0I7Ozs7SUFBaEIsVUFBaUIsRUFBTTtRQUNyQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBRUQscURBQWlCOzs7O0lBQWpCLFVBQWtCLEVBQU07UUFDdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFRCxvREFBZ0I7Ozs7SUFBaEIsVUFBa0IsVUFBa0I7UUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7SUFDN0IsQ0FBQzs7OztJQUVELHVDQUFHOzs7SUFBSDtRQUNFLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELHVDQUFHOzs7SUFBSDtRQUNFLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQztRQUV4QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7Ozs7SUFFTyw2Q0FBUzs7OztJQUFqQjtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFbEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7O2dCQTdERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFLLG9CQUFvQjtvQkFDakMsMDdCQUFrRDtvQkFJbEQsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVOzs7NEJBQUMsY0FBTSxPQUFBLHlCQUF5QixFQUF6QixDQUF5QixFQUFDOzRCQUN4RCxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjs7aUJBQ0Y7Ozs7O3dCQUVFLEtBQUssU0FBQyxPQUFPO3VCQUNiLEtBQUssU0FBQyxNQUFNO3NCQUNaLEtBQUssU0FBQyxLQUFLO3NCQUNYLEtBQUssU0FBQyxLQUFLOzRCQUNYLEtBQUssU0FBQyxXQUFXO3lCQUVqQixNQUFNLFNBQUMsUUFBUTs7SUF5Q2xCLGdDQUFDO0NBQUEsQUE5REQsSUE4REM7U0FoRFkseUJBQXlCOzs7SUFDcEMsMENBQWtDOztJQUNsQyx5Q0FBZ0M7O0lBQ2hDLHdDQUEwQjs7SUFDMUIsd0NBQTBCOztJQUMxQiw4Q0FBc0U7O0lBRXRFLDJDQUFvRTs7SUFFcEUsNkNBQWtCOztJQUVsQixxREFBZ0M7O0lBQ2hDLCtDQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogICAgJ25neC1udW1iZXItc3Bpbm5lcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9uZ3gtbnVtYmVyLXNwaW5uZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFtcbiAgICAnLi9uZ3gtbnVtYmVyLXNwaW5uZXIuY29tcG9uZW50LnNjc3MnXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTmd4TnVtYmVyU3Bpbm5lckNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hOdW1iZXJTcGlubmVyQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBASW5wdXQoJ3ZhbHVlJykgdmFsdWU6IG51bWJlciA9IDA7XG4gIEBJbnB1dCgnc3RlcCcpIHN0ZXA6IG51bWJlciA9IDE7XG4gIEBJbnB1dCgnbWluJykgbWluOiBudW1iZXI7XG4gIEBJbnB1dCgnbWF4JykgbWF4OiBudW1iZXI7XG4gIEBJbnB1dCgnZGlyZWN0aW9uJykgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCd8J3ZlcnRpY2FsJyA9ICdob3Jpem9udGFsJztcblxuICBAT3V0cHV0KCdjaGFuZ2UnKSBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGRpc2FibGVkOiBib29sZWFuO1xuXG4gIF9wcm9wYWdhdGVDaGFuZ2U6YW55ID0gKCkgPT4ge307XG4gIF9vblRvdWNoZWQ6ICgpID0+IHZvaWQ7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOm51bWJlcik6dm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlIHx8IDA7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOmFueSk6dm9pZCB7XG4gICAgdGhpcy5fcHJvcGFnYXRlQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjphbnkpOnZvaWQge1xuICAgIHRoaXMuX29uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZT8oaXNEaXNhYmxlZDpib29sZWFuKTp2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxuXG4gIGluYygpOnZvaWQge1xuICAgIHRoaXMudmFsdWUgKz0gdGhpcy5zdGVwO1xuICAgIHRoaXMuX29uQ2hhbmdlKCk7XG4gIH1cblxuICBkZWMoKTp2b2lkIHtcbiAgICB0aGlzLnZhbHVlIC09IHRoaXMuc3RlcDtcblxuICAgIHRoaXMuX29uQ2hhbmdlKCk7XG4gIH1cblxuICBwcml2YXRlIF9vbkNoYW5nZSgpOnZvaWQge1xuICAgIHRoaXMuX3Byb3BhZ2F0ZUNoYW5nZSh0aGlzLnZhbHVlKTtcblxuICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XG4gIH1cbn1cbiJdfQ==