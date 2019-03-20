import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { NgxNumberSpinComponent } from './ngx-number-spin/ngx-number-spin.component';
@NgModule({
  declarations: [NgxNumberSpinComponent],
  imports: [
    FormsModule
  ],
  exports: [NgxNumberSpinComponent]
})
export class NgxNumberSpinModule { }
