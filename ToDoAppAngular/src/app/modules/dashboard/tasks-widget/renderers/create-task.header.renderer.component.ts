import {Component} from '@angular/core';
import {Task} from "../../../../core/domain/task.class";
import {TasksService} from "../../../../core/services/tasks.service";

@Component({
  selector: 'create-task-header',
  template: `    
        <i class="fa fa-plus fa-2x blue pointer" 
           title="Create New Task"
           (click)="createNew()"></i>
    `,
  styles: [``]
})
export class CreateTaskHeaderRendererComponent {
  private params: any;

  constructor(private tasksService: TasksService){}

  agInit(params): void {
    this.params = params;
  }
  createNew(){
    this.tasksService.showEditModal('Create New Task', "Create", new Task({}));
  }
}
