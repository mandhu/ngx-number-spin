import { Component, Input, EventEmitter, Output, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = function (a0, a1) { return { "horizontal-wrapper": a0, "vertical-wrapper": a1 }; };
export class NgxNumberSpinnerComponent {
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
NgxNumberSpinnerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: NgxNumberSpinnerComponent, selectors: [["ngx-number-spinner"]], inputs: { value: "value", step: "step", min: "min", max: "max", direction: "direction" }, outputs: { change: "change" }, features: [i0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => NgxNumberSpinnerComponent),
                multi: true
            }
        ])], decls: 11, vars: 11, consts: [[1, "wrapper", 3, "ngClass"], ["type", "button", 3, "disabled", "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24"], ["d", "M19 13H5v-2h14v2z"], ["d", "M0 0h24v24H0z", "fill", "none"], ["d", "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"]], template: function NgxNumberSpinnerComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(8, _c0, ctx.direction === "horizontal", ctx.direction === "vertical"));
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("ripple", !ctx.min || ctx.value > ctx.min);
        i0.ɵɵproperty("disabled", ctx.value <= ctx.min);
        i0.ɵɵadvance(5);
        i0.ɵɵtextInterpolate(ctx.value);
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("ripple", !ctx.max || ctx.value < ctx.max);
        i0.ɵɵproperty("disabled", ctx.value >= ctx.max);
    } }, directives: [i1.NgClass], styles: ["input[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.wrapper[_ngcontent-%COMP%]{max-width:200px}.wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:0;overflow:hidden;padding:.5rem}.wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus{outline:none}.wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{cursor:not-allowed}.wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled   svg[_ngcontent-%COMP%]{fill:rgba(0,0,0,.26)}.wrapper[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{align-items:center;flex:1;font-size:1rem;min-width:30px;padding:0 .5rem;text-align:center;vertical-align:unset}.horizontal-wrapper[_ngcontent-%COMP%]{border:1px solid rgba(0,0,0,.12);border-radius:8px;display:flex;justify-content:space-between}.horizontal-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child{border-bottom-left-radius:7px;border-top-left-radius:7px}.horizontal-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child{border-bottom-right-radius:7px;border-top-right-radius:7px}.horizontal-wrapper[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{border-left:1px solid rgba(0,0,0,.12);border-right:1px solid rgba(0,0,0,.12);display:flex;justify-content:center}.vertical-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child{border:1px solid rgba(0,0,0,.12);border-radius:10px 10px 0 0;width:100%}.vertical-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child{border:1px solid rgba(0,0,0,.12);border-radius:0 0 10px 10px;width:100%}.vertical-wrapper[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{border-left:1px solid rgba(0,0,0,.12);border-right:1px solid rgba(0,0,0,.12);padding:.5rem}.ripple[_ngcontent-%COMP%]{background-position:50%;transition:background .3s}.ripple[_ngcontent-%COMP%]:hover{background:rgba(0,0,0,.12) radial-gradient(circle,transparent 1%,rgba(0,0,0,.12) 0) 50%/15000%;cursor:pointer}.ripple[_ngcontent-%COMP%]:active{background-color:rgba(0,0,0,.12);background-size:100%;transition:background 0s}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(NgxNumberSpinnerComponent, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW51bWJlci1zcGlubmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1udW1iZXItc3Bpbm5lci9zcmMvbGliL25neC1udW1iZXItc3Bpbm5lci9uZ3gtbnVtYmVyLXNwaW5uZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LW51bWJlci1zcGlubmVyL3NyYy9saWIvbmd4LW51bWJlci1zcGlubmVyL25neC1udW1iZXItc3Bpbm5lci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7Ozs7QUFnQnpFLE1BQU0sT0FBTyx5QkFBeUI7SUFjcEM7UUFiZ0IsVUFBSyxHQUFXLENBQUMsQ0FBQztRQUNuQixTQUFJLEdBQVcsQ0FBQyxDQUFDO1FBR1osY0FBUyxHQUE0QixZQUFZLENBQUM7UUFFcEQsV0FBTSxHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBSXBFLHFCQUFnQixHQUFPLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztJQUdoQixDQUFDO0lBRWpCLFVBQVUsQ0FBQyxLQUFZO1FBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsZ0JBQWdCLENBQUMsRUFBTTtRQUNyQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxFQUFNO1FBQ3RCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxnQkFBZ0IsQ0FBRSxVQUFrQjtRQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztJQUM3QixDQUFDO0lBRUQsR0FBRztRQUNELElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELEdBQUc7UUFDRCxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFeEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFTyxTQUFTO1FBQ2YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVsQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7a0dBL0NVLHlCQUF5Qjs4REFBekIseUJBQXlCLGlNQVJ6QjtZQUNUO2dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7Z0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMseUJBQXlCLENBQUM7Z0JBQ3hELEtBQUssRUFBRSxJQUFJO2FBQ1o7U0FDRjtRQ2ZILDhCQUVJO1FBQUEsaUNBSUk7UUFGSSxzR0FBUyxTQUFLLElBQUM7UUFFbkIsbUJBQ0U7UUFERiw4QkFDRTtRQUFBLDBCQUE2QjtRQUFBLDBCQUMvQjtRQUFBLGlCQUFNO1FBQ1YsaUJBQVM7UUFFVCxvQkFBSztRQUFMLDJCQUFLO1FBQUEsWUFBVztRQUFBLGlCQUFNO1FBRXRCLGlDQUlJO1FBRkksc0dBQVMsU0FBSyxJQUFDO1FBRW5CLG1CQUNFO1FBREYsOEJBQ0U7UUFBQSwwQkFBK0M7UUFBQSwyQkFDakQ7UUFBQSxpQkFBTTtRQUNWLGlCQUFTO1FBQ2IsaUJBQU07O1FBcEJELGtIQUE4RztRQUV2RyxlQUFvQztRQUFwQyx5REFBb0M7UUFFcEMsK0NBQXlCO1FBTTVCLGVBQVc7UUFBWCwrQkFBVztRQUdSLGVBQW9DO1FBQXBDLHlEQUFvQztRQUVwQywrQ0FBeUI7O2tEREN4Qix5QkFBeUI7Y0FkckMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBSyxvQkFBb0I7Z0JBQ2pDLFdBQVcsRUFBRSxxQ0FBcUM7Z0JBQ2xELFNBQVMsRUFBRTtvQkFDVCxxQ0FBcUM7aUJBQ3RDO2dCQUNELFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLHlCQUF5QixDQUFDO3dCQUN4RCxLQUFLLEVBQUUsSUFBSTtxQkFDWjtpQkFDRjthQUNGOztrQkFFRSxLQUFLO21CQUFDLE9BQU87O2tCQUNiLEtBQUs7bUJBQUMsTUFBTTs7a0JBQ1osS0FBSzttQkFBQyxLQUFLOztrQkFDWCxLQUFLO21CQUFDLEtBQUs7O2tCQUNYLEtBQUs7bUJBQUMsV0FBVzs7a0JBRWpCLE1BQU07bUJBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogICAgJ25neC1udW1iZXItc3Bpbm5lcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9uZ3gtbnVtYmVyLXNwaW5uZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFtcbiAgICAnLi9uZ3gtbnVtYmVyLXNwaW5uZXIuY29tcG9uZW50LnNjc3MnXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTmd4TnVtYmVyU3Bpbm5lckNvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hOdW1iZXJTcGlubmVyQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBASW5wdXQoJ3ZhbHVlJykgdmFsdWU6IG51bWJlciA9IDA7XG4gIEBJbnB1dCgnc3RlcCcpIHN0ZXA6IG51bWJlciA9IDE7XG4gIEBJbnB1dCgnbWluJykgbWluOiBudW1iZXI7XG4gIEBJbnB1dCgnbWF4JykgbWF4OiBudW1iZXI7XG4gIEBJbnB1dCgnZGlyZWN0aW9uJykgZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCd8J3ZlcnRpY2FsJyA9ICdob3Jpem9udGFsJztcblxuICBAT3V0cHV0KCdjaGFuZ2UnKSBjaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGRpc2FibGVkOiBib29sZWFuO1xuXG4gIF9wcm9wYWdhdGVDaGFuZ2U6YW55ID0gKCkgPT4ge307XG4gIF9vblRvdWNoZWQ6ICgpID0+IHZvaWQ7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOm51bWJlcik6dm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlIHx8IDA7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOmFueSk6dm9pZCB7XG4gICAgdGhpcy5fcHJvcGFnYXRlQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjphbnkpOnZvaWQge1xuICAgIHRoaXMuX29uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZT8oaXNEaXNhYmxlZDpib29sZWFuKTp2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxuXG4gIGluYygpOnZvaWQge1xuICAgIHRoaXMudmFsdWUgKz0gdGhpcy5zdGVwO1xuICAgIHRoaXMuX29uQ2hhbmdlKCk7XG4gIH1cblxuICBkZWMoKTp2b2lkIHtcbiAgICB0aGlzLnZhbHVlIC09IHRoaXMuc3RlcDtcblxuICAgIHRoaXMuX29uQ2hhbmdlKCk7XG4gIH1cblxuICBwcml2YXRlIF9vbkNoYW5nZSgpOnZvaWQge1xuICAgIHRoaXMuX3Byb3BhZ2F0ZUNoYW5nZSh0aGlzLnZhbHVlKTtcblxuICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XG4gIH1cbn1cbiIsIjxkaXYgY2xhc3M9XCJ3cmFwcGVyXCJcbiAgICAgW25nQ2xhc3NdPVwieyAnaG9yaXpvbnRhbC13cmFwcGVyJzogZGlyZWN0aW9uID09PSAnaG9yaXpvbnRhbCcsICd2ZXJ0aWNhbC13cmFwcGVyJzogZGlyZWN0aW9uID09PSAndmVydGljYWwnIH1cIj5cbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgW2NsYXNzLnJpcHBsZV09XCIhbWluIHx8IHZhbHVlID4gbWluXCJcbiAgICAgICAgICAgIChjbGljayk9XCJkZWMoKVwiXG4gICAgICAgICAgICBbZGlzYWJsZWRdPVwidmFsdWUgPD0gbWluXCI+XG4gICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgICA8cGF0aCBkPVwiTTE5IDEzSDV2LTJoMTR2MnpcIi8+PHBhdGggZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiLz5cbiAgICAgICAgPC9zdmc+XG4gICAgPC9idXR0b24+XG5cbiAgICA8ZGl2Pnt7IHZhbHVlIH19PC9kaXY+XG5cbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgW2NsYXNzLnJpcHBsZV09XCIhbWF4IHx8IHZhbHVlIDwgbWF4XCJcbiAgICAgICAgICAgIChjbGljayk9XCJpbmMoKVwiXG4gICAgICAgICAgICBbZGlzYWJsZWRdPVwidmFsdWUgPj0gbWF4XCI+XG4gICAgICAgIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMjRcIiBoZWlnaHQ9XCIyNFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgICA8cGF0aCBkPVwiTTE5IDEzaC02djZoLTJ2LTZINXYtMmg2VjVoMnY2aDZ2MnpcIi8+PHBhdGggZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiLz5cbiAgICAgICAgPC9zdmc+XG4gICAgPC9idXR0b24+XG48L2Rpdj5cbiJdfQ==