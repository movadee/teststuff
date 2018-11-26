import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AppService } from 'src/app/app.service';
import { HttpClient } from '@angular/common/http';
declare var require: any;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public form: FormGroup;
  // public questions = require('../data.json');
  public questions;
  public formGroup: any = {};
  public validationArr;

  constructor(public appService: AppService) {}

  ngOnInit() {
    this.appService.getFormStructure().subscribe(heroes => this.questions = heroes);

    setTimeout(() => {
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
  }, 1000);
}
}
