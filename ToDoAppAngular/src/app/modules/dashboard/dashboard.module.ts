import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { TasksWidgetComponent } from './tasks-widget/tasks-widget.component';
import {AgGridModule} from "ag-grid-angular";
import {EditRendererComponent} from "./tasks-widget/renderers/edit.renderer.component";
import {CompletedRendererComponent} from "./tasks-widget/renderers/completed.renderer.component";
import {DeleteRendererComponent} from "./tasks-widget/renderers/delete.renderer.component";
import { EditModalComponent } from './edit-modal/edit-modal.component';



@NgModule({
  declarations: [
    DashboardComponent,
    TasksWidgetComponent,
    EditModalComponent,


    //cell renderers
    EditRendererComponent,
    DeleteRendererComponent,
    CompletedRendererComponent
  ],
  imports: [
    AgGridModule.withComponents([
      //cell renderers
      EditRendererComponent,
      DeleteRendererComponent,
      CompletedRendererComponent
    ]),
    CommonModule

  ]
})
export class DashboardModule { }
