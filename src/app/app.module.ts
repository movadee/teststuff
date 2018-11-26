import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form-logic/form/form.component';
import { FormFieldComponent } from './form-logic/form-field/form-field.component';
import { CheckboxComponent } from './form-components/checkbox/checkbox.component';
import { InputComponent } from './form-components/input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FormFieldComponent,
    CheckboxComponent,
    InputComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ InputComponent, CheckboxComponent ]
})
export class AppModule { }
