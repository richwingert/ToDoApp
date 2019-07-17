import {Component, OnInit} from '@angular/core';
import {TasksService} from "../../../core/services/tasks.service";
import {Task} from "../../../core/domain/task.class";
import {flatMap, tap} from "rxjs/operators";
import {ColDef, ColumnApi, GridApi} from "ag-grid-community";
import {EditRendererComponent} from "./renderers/edit.renderer.component";
import {CompletedRendererComponent} from "./renderers/completed.renderer.component";

@Component({
  selector: 'tasks-widget',
  templateUrl: './tasks-widget.component.html',
  styleUrls: ['./tasks-widget.component.scss']
})
export class TasksWidgetComponent implements OnInit {
  taskList: Task[] = [];
  colDefs: ColDef[] = [];

  // gridApi and columnApi
  private api: GridApi;
  private columnApi: ColumnApi;

  frameworkComponents: any =  {
    editRenderer: EditRendererComponent,
    completedRenderer: CompletedRendererComponent
  };



  constructor(private tasksService: TasksService) {
  }

  ngOnInit() {
    //fetch list of tasks from API
    this.tasksService.getTaskList()
      //log and flatten the array
      .pipe(
        tap(items => console.log("Tasks: ", items)),
        flatMap(items => items["tasks"])
      )
      //for each task, push it to the list of tasks
      .subscribe(task => {
        this.taskList.push(new Task(task));
      })

    //fetch the column definitions for ag-grid
    //(rather than hard-coding, we fetch it with http service, theoretically allowing this to be dynamic in the future)
    this.tasksService.getTasksWidgetColDef()
      .pipe(tap(data => console.log("Column Defs: ", data)),)
      .subscribe(data =>{
      let colDefs: ColDef[] = [];
      if(data && data["columnDefinitions"])
        data["columnDefinitions"].forEach(colDef => colDefs.push(colDef));
      this.colDefs = colDefs;
    })
  }


  // one grid initialisation, grap the APIs and auto resize the columns to fit the available space
  onGridReady(params): void {
    this.api = params.api;
    this.columnApi = params.columnApi;

    this.api.sizeColumnsToFit();
  }

}
