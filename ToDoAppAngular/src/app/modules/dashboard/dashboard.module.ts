import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { TasksWidgetComponent } from './tasks-widget/tasks-widget.component';



@NgModule({
  declarations: [
    DashboardComponent,
    TasksWidgetComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DashboardModule { }
