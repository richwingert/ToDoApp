import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { TasksWidgetComponent } from './tasks-widget/tasks-widget.component';
import {AgGridModule} from "ag-grid-angular";
import {EditRendererComponent} from "./tasks-widget/renderers/edit.renderer.component";
import {CompletedRendererComponent} from "./tasks-widget/renderers/completed.renderer.component";



@NgModule({
  declarations: [
    DashboardComponent,
    TasksWidgetComponent,

    //cell renderers
    EditRendererComponent,
    CompletedRendererComponent
  ],
  imports: [
    AgGridModule.withComponents([
      //cell renderers
      EditRendererComponent,
      CompletedRendererComponent
    ]),
    CommonModule
  ]
})
export class DashboardModule { }
