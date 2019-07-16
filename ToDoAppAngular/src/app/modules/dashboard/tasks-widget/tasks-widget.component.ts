import {Component, OnInit} from '@angular/core';
import {TasksService} from "../../../core/services/tasks.service";
import {Task} from "../../../core/domain/task.class";
import {flatMap, tap} from "rxjs/operators";

@Component({
  selector: 'tasks-widget',
  templateUrl: './tasks-widget.component.html',
  styleUrls: ['./tasks-widget.component.scss']
})
export class TasksWidgetComponent implements OnInit {

  taskList: Task[] = [];

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
  }

}
