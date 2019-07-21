import {Component, OnInit} from '@angular/core';
import {TasksService} from "../../../core/services/tasks.service";
import {Task} from "../../../core/domain/task.class";
import {flatMap, tap} from "rxjs/operators";
import {ColDef, ColumnApi, GridApi} from "ag-grid-community";
import {EditRendererComponent} from "./renderers/edit.renderer.component";
import {CompletedRendererComponent} from "./renderers/completed.renderer.component";
import {DeleteRendererComponent} from "./renderers/delete.renderer.component";
import {DateRendererComponent} from "./renderers/date.renderer.component";
import {CreateTaskHeaderRendererComponent} from "./renderers/create-task.header.renderer.component";
import {CompletedFilterComponent} from "./renderers/completed.filter.component";

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
    //filter
    completedFilter: CompletedFilterComponent,
    //header
    createTaskHeader: CreateTaskHeaderRendererComponent,
    //cell
    editRenderer: EditRendererComponent,
    deleteRenderer: DeleteRendererComponent,
    dateRenderer: DateRendererComponent,
    completedRenderer: CompletedRendererComponent
  };



  constructor(private tasksService: TasksService) {
  }

  ngOnInit() {
    //fetch list of tasks from API
    this.tasksService.getTaskList()
      .subscribe((tasks: Task[]) => {
        //log the array
        console.log("Tasks: ", tasks);
        //for each task, push it to the list of tasks
        tasks.forEach(task => this.taskList.push(new Task(task)));
        //refresh the grid if it happened to init first
        if(this.api) this.api.setRowData(this.taskList)
      });

    //fetch the column definitions for ag-grid
    //(rather than hard-coding, we fetch it with http service, theoretically allowing this to be dynamic in the future)
    this.tasksService.getTasksWidgetColDef()
      //log the array
      .pipe(tap(data => console.log("Column Defs: ", data)))
      .subscribe(data =>{
        let colDefs: ColDef[] = [];

        //add each colDef to the local var
        if(data && data["columnDefinitions"])
          data["columnDefinitions"].forEach(colDef => colDefs.push(colDef));

        //add a date comparator to any date colDefs, as ag-grid doesn't compare dates correctly
        colDefs.forEach(col => {
          if (col.filter == 'agDateColumnFilter') col.filterParams = {comparator: this.dateComparator};
        });

        this.colDefs = colDefs;
      })
  }


  // one grid initialisation, grab the APIs and auto resize the columns to fit the available space
  onGridReady(params): void {
    this.api = params.api;
    this.tasksService.api = params.api;
    this.columnApi = params.columnApi;

    this.api.sizeColumnsToFit();
  }

  seeOverdue(){
    let api = this.tasksService.api;
    //set complete filter to show incomplete filters
    api.getFilterInstance("completed").setModel({isComplete: false, isIncomplete: true});

    //set dueDate filter to show tasks due less than today
    let dateModel: any = {
      dateFrom: this.formatDate(new Date()),
      dateTo: null,
      filterType: "date",
      type: "lessThan"
    };
    api.getFilterInstance("dueDate").setModel(dateModel);

    //trigger change event;
    api.onFilterChanged();
  }

  seeDueSoon(){
    let api = this.tasksService.api;
    //set complete filter to show incomplete filters
    api.getFilterInstance("completed").setModel({isComplete: false, isIncomplete: true});

    //set dueDate filter to show tasks due less than today
    let today = new Date();
    let tomorrow = new Date();
    tomorrow.setDate(today.getDate()+1);

    //build object to update ag-grid filter-model for date filters
    let dateModel: any = {
      condition1:{
        dateFrom: this.formatDate(today),
        dateTo: null,
        filterType: "date",
        type: "equals"
      },
      condition2:{
        dateFrom: this.formatDate(tomorrow),
        dateTo: null,
        filterType: "date",
        type: "equals"
      },
      operator: "OR",
      filterType: "date"
    };
    api.getFilterInstance("dueDate").setModel(dateModel);

    //trigger change event;
    api.onFilterChanged();
  }

  clearFilters(){
    let api = this.tasksService.api;
    api.setFilterModel(null);
    api.getFilterInstance("completed").setModel({isComplete: false, isIncomplete: false});
    api.onFilterChanged();
  }

  //helper function to convert date to yyyy-mm-dd format to match ag-grid
  formatDate(date: Date){
    if(date){
      let dd = date.getDate();
      let mm = date.getMonth()+1;
      let yyyy = date.getFullYear();
      return `${yyyy}-${mm}-${dd}`;
    }
    else return "";
  }

  //ag-grid compares dates as date/time pairs. we don't care about the time. this is a comparator to compare two dates, ignoring the time.
  //see https://www.ag-grid.com/javascript-grid-filter-date/ for more info
  dateComparator = (filterLocalDateAtMidnight, cellValue) => {
    if (!cellValue) return 0;

    // We create a Date object for comparison against the filter date
    let date = new Date(cellValue);
    let day =   date.getDate();
    let month = date.getMonth();
    let year =  date.getFullYear();
    let cellDate = new Date(year, month, day);

    // Now we can compare
    if (cellDate < filterLocalDateAtMidnight) {
      return -1;
    } else if (cellDate > filterLocalDateAtMidnight) {
      return 1;
    } else {
      return 0;
    }
  }
}
