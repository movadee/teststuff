import { Component, OnInit } from '@angular/core';

import '../materialize.min.js';
declare var M: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    // tslint:disable-next-line:no-unused-expression
    // new M.Tooltip(document.querySelector('.tooltipped'));
    // new M.Modal(document.querySelector('.modal'));
  }
}
