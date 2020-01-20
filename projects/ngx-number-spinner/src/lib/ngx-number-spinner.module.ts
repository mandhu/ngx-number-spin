import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { NgxNumberSpinnerComponent } from './ngx-number-spinner/ngx-number-spinner.component';

@NgModule({
  declarations: [
    NgxNumberSpinnerComponent
  ],
  exports: [
    NgxNumberSpinnerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NgxNumberSpinnerModule { }
