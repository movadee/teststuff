import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form-logic/form/form.component';
import { FormFieldComponent } from './form-logic/form-field/form-field.component';
import { CheckboxComponent } from './form-components/checkbox/checkbox.component';
import { InputComponent } from './form-components/input/input.component';
import { FormResolverService } from './form-resolver.service';

@NgModule({
  declarations: [
    FormComponent,
    FormFieldComponent,
    CheckboxComponent,
    InputComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    FormRoutingModule
  ],
  providers: [ FormResolverService ],
  entryComponents: [ InputComponent, CheckboxComponent ]
})
export class FormModule { }
