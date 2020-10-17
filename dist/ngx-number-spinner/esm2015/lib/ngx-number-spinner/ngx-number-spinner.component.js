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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW51bWJlci1zcGlubmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvanJxdWljay9kZXZlbG9wbWVudC9lbmNvdW50aW5nL25neC1udW1iZXItc3Bpbm5lci9wcm9qZWN0cy9uZ3gtbnVtYmVyLXNwaW5uZXIvc3JjLyIsInNvdXJjZXMiOlsibGliL25neC1udW1iZXItc3Bpbm5lci9uZ3gtbnVtYmVyLXNwaW5uZXIuY29tcG9uZW50LnRzIiwibGliL25neC1udW1iZXItc3Bpbm5lci9uZ3gtbnVtYmVyLXNwaW5uZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkYsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBZ0J6RSxNQUFNLE9BQU8seUJBQXlCO0lBY3BDO1FBYmdCLFVBQUssR0FBVyxDQUFDLENBQUM7UUFDbkIsU0FBSSxHQUFXLENBQUMsQ0FBQztRQUdaLGNBQVMsR0FBNEIsWUFBWSxDQUFDO1FBRXBELFdBQU0sR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUlwRSxxQkFBZ0IsR0FBTyxHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUM7SUFHaEIsQ0FBQztJQUVqQixVQUFVLENBQUMsS0FBWTtRQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELGdCQUFnQixDQUFDLEVBQU07UUFDckIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsaUJBQWlCLENBQUMsRUFBTTtRQUN0QixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsZ0JBQWdCLENBQUUsVUFBa0I7UUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7SUFDN0IsQ0FBQztJQUVELEdBQUc7UUFDRCxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxHQUFHO1FBQ0QsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDO1FBRXhCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRU8sU0FBUztRQUNmLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFbEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7O2tHQS9DVSx5QkFBeUI7OERBQXpCLHlCQUF5QixpTUFSekI7WUFDVDtnQkFDRSxPQUFPLEVBQUUsaUJBQWlCO2dCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLHlCQUF5QixDQUFDO2dCQUN4RCxLQUFLLEVBQUUsSUFBSTthQUNaO1NBQ0Y7UUNmSCw4QkFFSTtRQUFBLGlDQUlJO1FBRkksc0dBQVMsU0FBSyxJQUFDO1FBRW5CLG1CQUNFO1FBREYsOEJBQ0U7UUFBQSwwQkFBNkI7UUFBQSwwQkFDL0I7UUFBQSxpQkFBTTtRQUNWLGlCQUFTO1FBRVQsb0JBQUs7UUFBTCwyQkFBSztRQUFBLFlBQVc7UUFBQSxpQkFBTTtRQUV0QixpQ0FJSTtRQUZJLHNHQUFTLFNBQUssSUFBQztRQUVuQixtQkFDRTtRQURGLDhCQUNFO1FBQUEsMEJBQStDO1FBQUEsMkJBQ2pEO1FBQUEsaUJBQU07UUFDVixpQkFBUztRQUNiLGlCQUFNOztRQXBCRCxrSEFBOEc7UUFFdkcsZUFBb0M7UUFBcEMseURBQW9DO1FBRXBDLCtDQUF5QjtRQU01QixlQUFXO1FBQVgsK0JBQVc7UUFHUixlQUFvQztRQUFwQyx5REFBb0M7UUFFcEMsK0NBQXlCOztrRERDeEIseUJBQXlCO2NBZHJDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUssb0JBQW9CO2dCQUNqQyxXQUFXLEVBQUUscUNBQXFDO2dCQUNsRCxTQUFTLEVBQUU7b0JBQ1QscUNBQXFDO2lCQUN0QztnQkFDRCxTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQzt3QkFDeEQsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBQ0Y7YUFDRjtzQ0FFaUIsS0FBSztrQkFBcEIsS0FBSzttQkFBQyxPQUFPO1lBQ0MsSUFBSTtrQkFBbEIsS0FBSzttQkFBQyxNQUFNO1lBQ0MsR0FBRztrQkFBaEIsS0FBSzttQkFBQyxLQUFLO1lBQ0UsR0FBRztrQkFBaEIsS0FBSzttQkFBQyxLQUFLO1lBQ1EsU0FBUztrQkFBNUIsS0FBSzttQkFBQyxXQUFXO1lBRUEsTUFBTTtrQkFBdkIsTUFBTTttQkFBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAgICAnbmd4LW51bWJlci1zcGlubmVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL25neC1udW1iZXItc3Bpbm5lci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogW1xuICAgICcuL25neC1udW1iZXItc3Bpbm5lci5jb21wb25lbnQuc2NzcydcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOZ3hOdW1iZXJTcGlubmVyQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE5neE51bWJlclNwaW5uZXJDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIEBJbnB1dCgndmFsdWUnKSB2YWx1ZTogbnVtYmVyID0gMDtcbiAgQElucHV0KCdzdGVwJykgc3RlcDogbnVtYmVyID0gMTtcbiAgQElucHV0KCdtaW4nKSBtaW46IG51bWJlcjtcbiAgQElucHV0KCdtYXgnKSBtYXg6IG51bWJlcjtcbiAgQElucHV0KCdkaXJlY3Rpb24nKSBkaXJlY3Rpb246ICdob3Jpem9udGFsJ3wndmVydGljYWwnID0gJ2hvcml6b250YWwnO1xuXG4gIEBPdXRwdXQoJ2NoYW5nZScpIGNoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgZGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgX3Byb3BhZ2F0ZUNoYW5nZTphbnkgPSAoKSA9PiB7fTtcbiAgX29uVG91Y2hlZDogKCkgPT4gdm9pZDtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6bnVtYmVyKTp2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWUgfHwgMDtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46YW55KTp2b2lkIHtcbiAgICB0aGlzLl9wcm9wYWdhdGVDaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOmFueSk6dm9pZCB7XG4gICAgdGhpcy5fb25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlPyhpc0Rpc2FibGVkOmJvb2xlYW4pOnZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG5cbiAgaW5jKCk6dm9pZCB7XG4gICAgdGhpcy52YWx1ZSArPSB0aGlzLnN0ZXA7XG4gICAgdGhpcy5fb25DaGFuZ2UoKTtcbiAgfVxuXG4gIGRlYygpOnZvaWQge1xuICAgIHRoaXMudmFsdWUgLT0gdGhpcy5zdGVwO1xuXG4gICAgdGhpcy5fb25DaGFuZ2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgX29uQ2hhbmdlKCk6dm9pZCB7XG4gICAgdGhpcy5fcHJvcGFnYXRlQ2hhbmdlKHRoaXMudmFsdWUpO1xuXG4gICAgdGhpcy5jaGFuZ2UuZW1pdCh0aGlzLnZhbHVlKTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cIndyYXBwZXJcIlxuICAgICBbbmdDbGFzc109XCJ7ICdob3Jpem9udGFsLXdyYXBwZXInOiBkaXJlY3Rpb24gPT09ICdob3Jpem9udGFsJywgJ3ZlcnRpY2FsLXdyYXBwZXInOiBkaXJlY3Rpb24gPT09ICd2ZXJ0aWNhbCcgfVwiPlxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBbY2xhc3MucmlwcGxlXT1cIiFtaW4gfHwgdmFsdWUgPiBtaW5cIlxuICAgICAgICAgICAgKGNsaWNrKT1cImRlYygpXCJcbiAgICAgICAgICAgIFtkaXNhYmxlZF09XCJ2YWx1ZSA8PSBtaW5cIj5cbiAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNMTkgMTNINXYtMmgxNHYyelwiLz48cGF0aCBkPVwiTTAgMGgyNHYyNEgwelwiIGZpbGw9XCJub25lXCIvPlxuICAgICAgICA8L3N2Zz5cbiAgICA8L2J1dHRvbj5cblxuICAgIDxkaXY+e3sgdmFsdWUgfX08L2Rpdj5cblxuICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBbY2xhc3MucmlwcGxlXT1cIiFtYXggfHwgdmFsdWUgPCBtYXhcIlxuICAgICAgICAgICAgKGNsaWNrKT1cImluYygpXCJcbiAgICAgICAgICAgIFtkaXNhYmxlZF09XCJ2YWx1ZSA+PSBtYXhcIj5cbiAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIyNFwiIGhlaWdodD1cIjI0XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICAgIDxwYXRoIGQ9XCJNMTkgMTNoLTZ2NmgtMnYtNkg1di0yaDZWNWgydjZoNnYyelwiLz48cGF0aCBkPVwiTTAgMGgyNHYyNEgwelwiIGZpbGw9XCJub25lXCIvPlxuICAgICAgICA8L3N2Zz5cbiAgICA8L2J1dHRvbj5cbjwvZGl2PlxuIl19