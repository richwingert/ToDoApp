import {Component} from "@angular/core";
import {ICellRendererAngularComp} from "ag-grid-angular";
import {TasksService} from "../../../../core/services/tasks.service";
import {Task} from "../../../../core/domain/task.class";

@Component({
  selector: 'edit-renderer',
  template: `
    <i class="fa fa-edit fa-2x green pointer" 
       title="Edit This Task"
       (click)="editTask()">
    </i>
  `,
  styles: [``]
})

export class EditRendererComponent implements ICellRendererAngularComp {
  public params: any;

  constructor(private tasksService: TasksService) { }

  agInit(params: any): void {
    this.params = params;
  }

  refresh(): boolean {return false;}

  /**
   * Click event to show editing modal
   */
  editTask(){
    let task: Task= this.params.data;
    this.tasksService.showEditModal("Edit Existing Task", "Save", task);
  }
}
