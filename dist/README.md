# ngx-number-spinner

[![npm](https://img.shields.io/npm/l/ngx-number-spinner.svg)](https://www.npmjs.com/package/ngx-number-spinner/)
[![npm](https://img.shields.io/npm/dt/ngx-number-spinner.svg)](https://www.npmjs.com/package/ngx-number-spinner)
[![npm](https://img.shields.io/npm/dm/ngx-number-spinner.svg)](https://www.npmjs.com/package/ngx-number-spinner)

![](example.png)

## Index ##

* [About](#about)
* [Setup](#setup)
* [Documentation](#documentation)
* [Issues](#issues)
* [Contributing](#contributing)
* [Deploy](#deploy)

## About ## 

This is a light-weight Angular 7+ component for adding a number spinner to your project. 

* Try out [the demo](https://ngx-number-spinner.jrquick.com) to see it in action!
* Visit [my website](https://jrquick.com) for other cool projects!

## Setup ##

### Installation ###

* For Angular 7: 
```bash
$ npm install ngx-number-spinner@^1.0.0 --save
```

* For Angular 8+: 
```bash
$ npm install ngx-number-spinner --save
```

### Inject ###

Add NumberPickerModule to `AppModule`

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NgxNumberSpinnerModule } from 'ngx-number-spinner';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxNumberSpinnerModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
```

## Documentation ##

### Standalone Examples ###

```typescript
export class AppComponent {
    change(value: number): void {
        console.log(value);
    }
}
```

#### With validation 'MIN' value (min=1) ####
```html
<ngx-number-spinner
    [value]="4"
    (change)="change($event)" 
    [min]="1">
</ngx-number-spinner>
```

#### With validation 'MAX' value (min=9) ####
```html
<ngx-number-spinner
    [value]="4"
    (change)="change($event)" 
    [max]="9">
</ngx-number-spinner>
```

#### With validation 'MIN' and 'MAX' value (min=1, max=9) ####
```html
<ngx-number-spinner
    [value]="4"
    (change)="change($event)"
    [min]="1"
    [max]="9">
</ngx-number-spinner>
```

#### With 'STEP' (step=5) ####
```html
<ngx-number-spinner
    (change)="change($event)" 
    [step]="5">
</ngx-number-spinner>
```
--------------------------------------------------------------------------------------------------------------------
### Form Example
```typescript
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

export class AppComponent {
    form: FormGroup;
    
    constructor(private fb: FormBuilder) {
        this.form = this.fb.group({
            price: 11
        });
    }
       
    submit() {
        alert(JSON.stringify(this.form.value));
    }
}
```

```html
<form [formGroup]="form" (submit)="submit()">
    <ngx-number-spinner formControlName="price" [min]="1" [max]="9"></ngx-number-spinner>
    
    <button type="submit">submit</button>
</form>

```

### Component Inputs and Outputs

--------------------------------------------------------------------------------------------
| Attribute        | Type           | Required  | Default | Description |
| :------------- |:-------------| :-----:| :----| :-----|
| value | [input] number | No | 0 | initial value for the spinner |
| min | [input] number | No | null | limit the minimal number |
| max | [input] number | No | null | limit the maximum number |
| spin | [input] number | No | 1 | increment or decrement by current number  |
| vertical | [input] vertical|horizontal | No | horizontal | change the direction of the buttons |
| (change) | (output) number | no | - | emits the value of the current number, every time the user clicks the - or + button |
-------------------------------------------------------------------------------------------------------

## Issues ##

If you find any issues feel free to open a request in [the Issues tab](https://github.com/mandhu/ngx-number-spinner/issues). If I have the time I will try to solve any issues but cannot make any guarantees. Feel free to contribute yourself.

## Contributing ##

To contribute, clone the repo. Then, run `npm install` to get the packages needed for the library to work.

### Thanks ###

* [mandhu](https://github.com/mandhu)
* [jrquick17](https://github.com/jrquick17)
