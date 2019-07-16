import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard',
  template: `
    <tasks-widget></tasks-widget>
  `,
  styles: [``]
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
