import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxNumberSpinModule } from 'ngx-number-spin';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgxNumberSpinModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
