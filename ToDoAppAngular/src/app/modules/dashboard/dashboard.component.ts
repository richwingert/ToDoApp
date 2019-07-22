import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard',
  template: `
    <tasks-widget></tasks-widget>
    <edit-modal></edit-modal>
  `,
  styles: [``]
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
