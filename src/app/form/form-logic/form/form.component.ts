import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public form: FormGroup;
  public questions;
  public formGroup: any = {};
  public validationArr;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.questions = this.route.snapshot.data.formData;

    if (this.questions) {
      this.questions.fields.forEach(question => {
        this.validationArr = [];
        question.validation.forEach(item =>  {
          (item.type === 'required')
          ? this.validationArr.push(Validators[item.type])
          : this.validationArr.push(Validators[item.type](item.arguments));
        });
        this.formGroup[question.id] = new FormControl(question.data || '', this.validationArr);
      });
      this.form = new FormGroup(this.formGroup);
    }
  }

}
