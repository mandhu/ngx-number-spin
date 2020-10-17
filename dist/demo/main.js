(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jrquick/development/encounting/ngx-number-spinner/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BjaB":
/*!****************************************************************!*\
  !*** ./dist/ngx-number-spinner/fesm2015/ngx-number-spinner.js ***!
  \****************************************************************/
/*! exports provided: NgxNumberSpinnerComponent, NgxNumberSpinnerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxNumberSpinnerComponent", function() { return NgxNumberSpinnerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxNumberSpinnerModule", function() { return NgxNumberSpinnerModule; });
/* harmony import */ var _Users_jrquick_development_encounting_ngx_number_spinner_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var _Users_jrquick_development_encounting_ngx_number_spinner_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






var _c0 = function _c0(a0, a1) {
  return {
    "horizontal-wrapper": a0,
    "vertical-wrapper": a1
  };
};

var NgxNumberSpinnerComponent = /*#__PURE__*/function () {
  function NgxNumberSpinnerComponent() {
    Object(_Users_jrquick_development_encounting_ngx_number_spinner_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NgxNumberSpinnerComponent);

    this.value = 0;
    this.step = 1;
    this.direction = 'horizontal';
    this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();

    this._propagateChange = function () {};
  }

  Object(_Users_jrquick_development_encounting_ngx_number_spinner_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NgxNumberSpinnerComponent, [{
    key: "writeValue",
    value: function writeValue(value) {
      this.value = value || 0;
    }
  }, {
    key: "registerOnChange",
    value: function registerOnChange(fn) {
      this._propagateChange = fn;
    }
  }, {
    key: "registerOnTouched",
    value: function registerOnTouched(fn) {
      this._onTouched = fn;
    }
  }, {
    key: "setDisabledState",
    value: function setDisabledState(isDisabled) {
      this.disabled = isDisabled;
    }
  }, {
    key: "inc",
    value: function inc() {
      this.value += this.step;

      this._onChange();
    }
  }, {
    key: "dec",
    value: function dec() {
      this.value -= this.step;

      this._onChange();
    }
  }, {
    key: "_onChange",
    value: function _onChange() {
      this._propagateChange(this.value);

      this.change.emit(this.value);
    }
  }]);

  return NgxNumberSpinnerComponent;
}();

NgxNumberSpinnerComponent.ɵfac = function NgxNumberSpinnerComponent_Factory(t) {
  return new (t || NgxNumberSpinnerComponent)();
};

NgxNumberSpinnerComponent.ɵcmp = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"])({
  type: NgxNumberSpinnerComponent,
  selectors: [["ngx-number-spinner"]],
  inputs: {
    value: "value",
    step: "step",
    min: "min",
    max: "max",
    direction: "direction"
  },
  outputs: {
    change: "change"
  },
  features: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"])([{
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(function () {
      return NgxNumberSpinnerComponent;
    }),
    multi: true
  }])],
  decls: 11,
  vars: 11,
  consts: [[1, "wrapper", 3, "ngClass"], ["type", "button", 3, "disabled", "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24"], ["d", "M19 13H5v-2h14v2z"], ["d", "M0 0h24v24H0z", "fill", "none"], ["d", "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"]],
  template: function NgxNumberSpinnerComponent_Template(rf, ctx) {
    if (rf & 1) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"])(0, "div", 0);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"])(1, "button", 1);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"])("click", function NgxNumberSpinnerComponent_Template_button_click_1_listener() {
        return ctx.dec();
      });
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"])();
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"])(2, "svg", 2);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"])(3, "path", 3);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"])(4, "path", 4);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"])();
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"])();
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"])();
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"])(5, "div");
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"])(6);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"])();
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"])(7, "button", 1);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"])("click", function NgxNumberSpinnerComponent_Template_button_click_7_listener() {
        return ctx.inc();
      });
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"])();
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"])(8, "svg", 2);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"])(9, "path", 5);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"])(10, "path", 4);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"])();
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"])();
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"])();
    }

    if (rf & 2) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"])("ngClass", Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction2"])(8, _c0, ctx.direction === "horizontal", ctx.direction === "vertical"));
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"])(1);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"])("ripple", !ctx.min || ctx.value > ctx.min);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"])("disabled", ctx.value <= ctx.min);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"])(5);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"])(ctx.value);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"])(1);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"])("ripple", !ctx.max || ctx.value < ctx.max);
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"])("disabled", ctx.value >= ctx.max);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]],
  styles: ["input[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.wrapper[_ngcontent-%COMP%]{max-width:200px}.wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{border:0;overflow:hidden;padding:.5rem}.wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus{outline:none}.wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{cursor:not-allowed}.wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled   svg[_ngcontent-%COMP%]{fill:rgba(0,0,0,.26)}.wrapper[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{align-items:center;flex:1;font-size:1rem;min-width:30px;padding:0 .5rem;text-align:center;vertical-align:unset}.horizontal-wrapper[_ngcontent-%COMP%]{border:1px solid rgba(0,0,0,.12);border-radius:8px;display:flex;justify-content:space-between}.horizontal-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child{border-bottom-left-radius:7px;border-top-left-radius:7px}.horizontal-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child{border-bottom-right-radius:7px;border-top-right-radius:7px}.horizontal-wrapper[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{border-left:1px solid rgba(0,0,0,.12);border-right:1px solid rgba(0,0,0,.12);display:flex;justify-content:center}.vertical-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:first-child{border:1px solid rgba(0,0,0,.12);border-radius:10px 10px 0 0;width:100%}.vertical-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child{border:1px solid rgba(0,0,0,.12);border-radius:0 0 10px 10px;width:100%}.vertical-wrapper[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{border-left:1px solid rgba(0,0,0,.12);border-right:1px solid rgba(0,0,0,.12);padding:.5rem}.ripple[_ngcontent-%COMP%]{background-position:50%;transition:background .3s}.ripple[_ngcontent-%COMP%]:hover{background:rgba(0,0,0,.12) radial-gradient(circle,transparent 1%,rgba(0,0,0,.12) 0) 50%/15000%;cursor:pointer}.ripple[_ngcontent-%COMP%]:active{background-color:rgba(0,0,0,.12);background-size:100%;transition:background 0s}"]
});
/*@__PURE__*/

(function () {
  Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"])(NgxNumberSpinnerComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
    args: [{
      selector: 'ngx-number-spinner',
      templateUrl: './ngx-number-spinner.component.html',
      styleUrls: ['./ngx-number-spinner.component.scss'],
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(function () {
          return NgxNumberSpinnerComponent;
        }),
        multi: true
      }]
    }]
  }], function () {
    return [];
  }, {
    value: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
      args: ['value']
    }],
    step: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
      args: ['step']
    }],
    min: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
      args: ['min']
    }],
    max: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
      args: ['max']
    }],
    direction: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"],
      args: ['direction']
    }],
    change: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"],
      args: ['change']
    }]
  });
})();

var NgxNumberSpinnerModule = function NgxNumberSpinnerModule() {
  Object(_Users_jrquick_development_encounting_ngx_number_spinner_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NgxNumberSpinnerModule);
};

NgxNumberSpinnerModule.ɵmod = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"])({
  type: NgxNumberSpinnerModule
});
NgxNumberSpinnerModule.ɵinj = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"])({
  factory: function NgxNumberSpinnerModule_Factory(t) {
    return new (t || NgxNumberSpinnerModule)();
  },
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"])(NgxNumberSpinnerModule, {
    declarations: [NgxNumberSpinnerComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
    exports: [NgxNumberSpinnerComponent]
  });
})();
/*@__PURE__*/


(function () {
  Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"])(NgxNumberSpinnerModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
    args: [{
      declarations: [NgxNumberSpinnerComponent],
      exports: [NgxNumberSpinnerComponent],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]]
    }]
  }], null, null);
})();
/*
 * Public API Surface of ngx-number-spinner
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





var AppComponent = /** @class */ (function () {
    function AppComponent(fb) {
        this.fb = fb;
        this.title = 'ngx-number-spinner';
        this.value = 0;
        this.form = this.fb.group({
            price: 11
        });
    }
    AppComponent.prototype.submit = function () {
        alert(JSON.stringify(this.form.value));
    };
    AppComponent.prototype.change = function (value) {
        this.value = value;
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
    ]; };
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-root',
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
            styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h3 style=\"margin-top: 6rem; margin-left: 2rem;\">\n  Horizontal Example\n</h3>\n\n<div style=\"margin-left: 4rem;\">\n  <ngx-number-spinner [value]=\"1\"\n                      (change)=\"change($event)\"\n                      [direction]=\"'horizontal'\"></ngx-number-spinner>\n</div>\n\n<h3 style=\"margin-top: 2rem; margin-left: 2rem;\">\n  Vertical Example\n</h3>\n\n<div style=\"margin-left: 4rem;\">\n  <ngx-number-spinner style=\"margin-left: 4rem;\"\n                      [value]=\"2\"\n                      (change)=\"change($event)\"\n                      [direction]=\"'vertical'\"></ngx-number-spinner>\n</div>\n\n<h3 style=\"margin-top: 2rem; margin-left: 2rem;\">\n  With <b>[min]=\"1\"</b> and <b>[max]=\"2\"</b>\n</h3>\n\n<div style=\"margin-left: 4rem;\">\n  <ngx-number-spinner style=\"margin-left: 4rem;\"\n                      [value]=\"4\"\n                      (change)=\"change($event)\"\n                      [min]=\"1\"\n                      [max]=\"9\"></ngx-number-spinner>\n</div>\n\n<h3 style=\"margin-top: 2rem; margin-left: 2rem;\">\n  With <b>[step]=\"5\"</b>\n</h3>\n\n<div style=\"margin-left: 4rem;\">\n  <ngx-number-spinner (change)=\"change($event)\"\n                      [step]=\"5\"></ngx-number-spinner>\n</div>\n\n<h3 style=\"margin-top: 2rem; margin-left: 2rem;\">\n  In a form\n</h3>\n\n<div style=\"margin-left: 4rem;\">\n  <form [formGroup]=\"form\"\n        (submit)=\"submit()\">\n      <ngx-number-spinner\n        formControlName=\"price\">\n      </ngx-number-spinner>\n  </form>\n</div>\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_number_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-number-spinner */ "BjaB");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                ngx_number_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxNumberSpinnerModule"]
            ],
            providers: [],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map