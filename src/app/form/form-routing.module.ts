import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form-logic/form/form.component';
import { FormResolverService } from './form-resolver.service';

const routes: Routes = [
  { path: '', component: FormComponent, resolve: {formData: FormResolverService} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
