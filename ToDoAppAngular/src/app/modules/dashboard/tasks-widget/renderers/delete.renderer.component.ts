import {Component} from "@angular/core";
import {ICellRendererAngularComp} from "ag-grid-angular";
import {Task} from "../../../../core/domain/task.class";
import {TasksService} from "../../../../core/services/tasks.service";

@Component({
  selector: 'edit-renderer',
  template: `
    <i class="fa fa-trash fa-2x red pointer" 
       (click)="deleteTask()">
    </i>
  `,
  styles: [``]
})

export class DeleteRendererComponent implements ICellRendererAngularComp {
  public params: any;

  constructor(private tasksService: TasksService){}

  agInit(params: any): void {
    this.params = params;
  }

  refresh(): boolean {return false;}

  /**
   * Click event to show editing modal
   */
  deleteTask(){
    let task: Task= this.params.data;

    //update API
    this.tasksService.removeTask(task).subscribe(data => {
      //update ag-grid
      this.params.api.setRowData(data);
    });
  }
}
