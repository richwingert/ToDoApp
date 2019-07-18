import {Component} from "@angular/core";
import {ICellRendererAngularComp} from "ag-grid-angular";
import {TasksService} from "../../../../core/services/tasks.service";
import {Task} from "../../../../core/domain/task.class";

@Component({
  selector: 'completed-renderer',
  template: `
    <i class="fa fa-2x pointer" 
       [ngClass]="params.data.completed ? 'fa-check blue' : 'fa-times red'"
       (click)="toggleCompletion()">
    </i>
  `,
  styles: [``]
})

export class CompletedRendererComponent implements ICellRendererAngularComp {
  public params: any;

  constructor(private tasksService: TasksService){}

  agInit(params: any): void {
    this.params = params;
  }

  refresh(): boolean {return false;}

  /**
   * Click event to toggle the completion status of the task
   */
  toggleCompletion(){
    let task: Task= this.params.data;

    //toggle task completion status
    task.completed = !task.completed;

    //update API
    this.tasksService.updateTask(task).subscribe(data => console.log(data));
  }
}
