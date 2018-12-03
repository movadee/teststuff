import { Component, OnInit, Input, ViewContainerRef, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputComponent } from '../../form-components/input/input.component';
import { CheckboxComponent } from '../../form-components/checkbox/checkbox.component';
import { FormBaseComponent } from '../../form-components/form-base.component';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() question: any;
  @ViewChild('container', {read: ViewContainerRef}) private container: ViewContainerRef;

  readonly templateMapper = {
    formTextInput: InputComponent,
    formCheckbox: CheckboxComponent
  };

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.container.clear();
    const componentRef = this.container.createComponent(
      this.componentFactoryResolver.resolveComponentFactory(this.templateMapper[this.question.componentType])
    );
    (<FormBaseComponent>componentRef.instance).form = this.form;
    (<FormBaseComponent>componentRef.instance).question = this.question;
  }
}
