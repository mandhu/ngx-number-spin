# ngx-number-spin

This is an angular number spinner component.

## Installation

To install this library (component), run:
```bash
$ npm i ngx-number-spin --save
```

## Usage
add NumberPickerModule to `AppModule`

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import this library
import { NgxNumberSpinModule } from 'ngx-number-spin';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    
    // Specify this library as an import
    NgxNumberSpinModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once this library is imported, you can use this component in your Angular application:

### Standalone Examples

```typescript
export class AppComponent {
    change(value: number): void {
        console.log(value);
    }
}
```

##### With validation 'MIN' value (min=1)
```html
<ngx-number-spin
    [value]="4"
    (change)="change($event)" 
    [min]="1">
</ngx-number-spin>
```

##### With validation 'MAX' value (min=9)
```html
<ngx-number-spin 
    [value]="4"
    (change)="change($event)" 
    [max]="9">
</ngx-number-spin>
```

##### With validation 'MIN' and 'MAX' value (min=1, max=9)
```html
<ngx-number-spin 
    [value]="4"
    (change)="change($event)"
    [min]="1"
    [max]="9">
</ngx-number-spin>
```

##### With 'STEP' (step=5)
```html
<ngx-number-spin
    (change)="change($event)" 
    [step]="5">
</ngx-number-spin>
```
--------------------------------------------------------------------------------------------------------------------
### Form Example
```typescript
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

export class AppComponent {
    form: FormGroup;
    
    constructor(private fb: FormBuilder) {
        this.form = this.fb.group({
            price: 11,
        });
    }
       
    submit() {
        alert(JSON.stringify(this.form.value));
    }
}
```

```html
<form [formGroup]="form" (submit)="submit()">

    <ngx-number-spin formControlName="price" [min]="1" [max]="9"></ngx-number-spin>
    
    <button type="submit">submit</button>
</form>

```

-------------------------------------------------------------------------------------------------------

![ngx-number-spin example image](/src/assets/images/example.png "ngx-number-spin example image")