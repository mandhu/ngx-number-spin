import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { NgxNumberSpinComponent } from './ngx-number-spin/ngx-number-spin.component';

@NgModule({
  declarations: [
    NgxNumberSpinComponent
  ],
  exports: [
    NgxNumberSpinComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NgxNumberSpinModule { }
