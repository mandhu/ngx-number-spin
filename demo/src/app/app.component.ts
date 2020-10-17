import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector:    'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss'
  ]
})
export class AppComponent {
  form:FormGroup;
  title:string = 'ngx-number-spinner';
  value:number = 0;

  constructor(private fb:FormBuilder) {
    this.form = this.fb.group({
      price: 17
    });
  }

  public change(value: number) {
    this.value = value;
  }

  public goToGitHub():void {
    window.location.href = 'https://github.com/jrquick17/ngx-number-spinner';
  }

  public submit() {
    alert(JSON.stringify(this.form.value));
  }
}
