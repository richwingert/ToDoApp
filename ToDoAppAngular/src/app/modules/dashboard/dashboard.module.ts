import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { TasksWidgetComponent } from './tasks-widget/tasks-widget.component';
import {AgGridModule} from "ag-grid-angular";
import {EditRendererComponent} from "./tasks-widget/renderers/edit.renderer.component";
import {CompletedRendererComponent} from "./tasks-widget/renderers/completed.renderer.component";
import {DeleteRendererComponent} from "./tasks-widget/renderers/delete.renderer.component";
import { EditModalComponent } from './edit-modal/edit-modal.component';
import {BsDatepickerModule} from "ngx-bootstrap/datepicker";
import {FormsModule} from "@angular/forms";
import {DateRendererComponent} from "./tasks-widget/renderers/date.renderer.component";
import {CreateTaskHeaderRendererComponent} from "./tasks-widget/renderers/create-task.header.renderer.component";
import {CompletedFilterComponent} from "./tasks-widget/renderers/completed.filter.component";



@NgModule({
  declarations: [
    DashboardComponent,
    TasksWidgetComponent,
    EditModalComponent,

    //filter renderers
    CompletedFilterComponent,

    //header renderers
    CreateTaskHeaderRendererComponent,

    //cell renderers
    EditRendererComponent,
    DeleteRendererComponent,
    DateRendererComponent,
    CompletedRendererComponent
  ],
  imports: [
    AgGridModule.withComponents([
      //filter renderers
      CompletedFilterComponent,
      //header renderers
      CreateTaskHeaderRendererComponent,

      //cell renderers
      EditRendererComponent,
      DeleteRendererComponent,
      DateRendererComponent,
      CompletedRendererComponent
    ]),
    CommonModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
  ]
})
export class DashboardModule { }
