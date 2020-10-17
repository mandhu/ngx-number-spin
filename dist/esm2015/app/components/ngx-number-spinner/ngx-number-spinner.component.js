import { Component, Input, EventEmitter, Output, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW51bWJlci1zcGlubmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvanJxdWljay9kZXZlbG9wbWVudC9lbmNvdW50aW5nL25neC1udW1iZXItc3Bpbm5lci9zcmMvIiwic291cmNlcyI6WyJhcHAvY29tcG9uZW50cy9uZ3gtbnVtYmVyLXNwaW5uZXIvbmd4LW51bWJlci1zcGlubmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFnQnpFLE1BQU0sT0FBTyx5QkFBeUI7SUFjcEM7UUFiZ0IsVUFBSyxHQUFXLENBQUMsQ0FBQztRQUNuQixTQUFJLEdBQVcsQ0FBQyxDQUFDO1FBR1osY0FBUyxHQUE0QixZQUFZLENBQUM7UUFFcEQsV0FBTSxHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBSXBFLHFCQUFnQixHQUFPLEdBQUcsRUFBRSxHQUFFLENBQUMsQ0FBQztJQUdoQixDQUFDO0lBRWpCLFVBQVUsQ0FBQyxLQUFZO1FBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsZ0JBQWdCLENBQUMsRUFBTTtRQUNyQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxFQUFNO1FBQ3RCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxnQkFBZ0IsQ0FBRSxVQUFrQjtRQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztJQUM3QixDQUFDO0lBRUQsR0FBRztRQUNELElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELEdBQUc7UUFDRCxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUM7UUFFeEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFTyxTQUFTO1FBQ2YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVsQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7O1lBN0RGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUssb0JBQW9CO2dCQUNqQywwN0JBQWtEO2dCQUlsRCxTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQzt3QkFDeEQsS0FBSyxFQUFFLElBQUk7cUJBQ1o7aUJBQ0Y7O2FBQ0Y7Ozs7b0JBRUUsS0FBSyxTQUFDLE9BQU87bUJBQ2IsS0FBSyxTQUFDLE1BQU07a0JBQ1osS0FBSyxTQUFDLEtBQUs7a0JBQ1gsS0FBSyxTQUFDLEtBQUs7d0JBQ1gsS0FBSyxTQUFDLFdBQVc7cUJBRWpCLE1BQU0sU0FBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAgICAnbmd4LW51bWJlci1zcGlubmVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL25neC1udW1iZXItc3Bpbm5lci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogW1xuICAgICcuL25neC1udW1iZXItc3Bpbm5lci5jb21wb25lbnQuc2NzcydcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOZ3hOdW1iZXJTcGlubmVyQ29tcG9uZW50KSxcbiAgICAgIG11bHRpOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE5neE51bWJlclNwaW5uZXJDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIEBJbnB1dCgndmFsdWUnKSB2YWx1ZTogbnVtYmVyID0gMDtcbiAgQElucHV0KCdzdGVwJykgc3RlcDogbnVtYmVyID0gMTtcbiAgQElucHV0KCdtaW4nKSBtaW46IG51bWJlcjtcbiAgQElucHV0KCdtYXgnKSBtYXg6IG51bWJlcjtcbiAgQElucHV0KCdkaXJlY3Rpb24nKSBkaXJlY3Rpb246ICdob3Jpem9udGFsJ3wndmVydGljYWwnID0gJ2hvcml6b250YWwnO1xuXG4gIEBPdXRwdXQoJ2NoYW5nZScpIGNoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgZGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgX3Byb3BhZ2F0ZUNoYW5nZTphbnkgPSAoKSA9PiB7fTtcbiAgX29uVG91Y2hlZDogKCkgPT4gdm9pZDtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6bnVtYmVyKTp2b2lkIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWUgfHwgMDtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46YW55KTp2b2lkIHtcbiAgICB0aGlzLl9wcm9wYWdhdGVDaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOmFueSk6dm9pZCB7XG4gICAgdGhpcy5fb25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlPyhpc0Rpc2FibGVkOmJvb2xlYW4pOnZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG5cbiAgaW5jKCk6dm9pZCB7XG4gICAgdGhpcy52YWx1ZSArPSB0aGlzLnN0ZXA7XG4gICAgdGhpcy5fb25DaGFuZ2UoKTtcbiAgfVxuXG4gIGRlYygpOnZvaWQge1xuICAgIHRoaXMudmFsdWUgLT0gdGhpcy5zdGVwO1xuXG4gICAgdGhpcy5fb25DaGFuZ2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgX29uQ2hhbmdlKCk6dm9pZCB7XG4gICAgdGhpcy5fcHJvcGFnYXRlQ2hhbmdlKHRoaXMudmFsdWUpO1xuXG4gICAgdGhpcy5jaGFuZ2UuZW1pdCh0aGlzLnZhbHVlKTtcbiAgfVxufVxuIl19