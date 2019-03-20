import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'mat-increments';

    form: FormGroup;
    value: number = 0;
    constructor(private fb: FormBuilder) {
        this.form = this.fb.group({
            price: new FormControl({value: 11, disabled: true}),
        });
    }

    submit() {
        alert(JSON.stringify(this.form.value));
    }

    change(value: number) {
        this.value = value;
    }
}
