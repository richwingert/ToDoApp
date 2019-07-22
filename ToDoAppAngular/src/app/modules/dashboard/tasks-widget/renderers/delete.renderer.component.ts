import {Component, ElementRef, TemplateRef, ViewChild} from "@angular/core";
import {ICellRendererAngularComp} from "ag-grid-angular";
import {Task} from "../../../../core/domain/task.class";
import {TasksService} from "../../../../core/services/tasks.service";
import {BsModalRef, BsModalService} from "ngx-bootstrap";

@Component({
  selector: 'edit-renderer',
  template: `
    <!--Trash Icon-->
    <i class="fa fa-trash fa-2x red pointer" 
       title="Delete this task"
       (click)="openModal()">
    </i>

    <!--Confirmation Modal-->
    <ng-template #template>
      <div class="modal-header">
        <h4 class="modal-title pull-left">Are you sure you want to delete this task?</h4>
        <button type="button" class="close pull-right" aria-label="Close" (click)="modalRef.hide()">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-footer">
        <button class="btn btn-danger" (click)="cancel()">Cancel</button>
        <button class="btn btn-primary" (click)="deleteTask()">Confirm</button>
      </div>
    </ng-template>
  `,
  styles: [``]
})

export class DeleteRendererComponent implements ICellRendererAngularComp {
  public params: any;
  @ViewChild('template',null) modal: TemplateRef<ElementRef>;
  modalRef: BsModalRef;

  constructor(private tasksService: TasksService, private modalService: BsModalService){}

  agInit(params: any): void {
    this.params = params;
  }

  refresh(): boolean {return false;}

  openModal() {
    this.modalRef = this.modalService.show(this.modal);
  }
  cancel(){
    this.modalRef.hide();
  }

  /**
   * Click event to show editing modal
   */
  deleteTask(){
    let task: Task= this.params.data;

    //update API
    this.tasksService.removeTask(task).subscribe(data => {
      //update ag-grid
      this.params.api.setRowData(data);
      this.modalRef.hide();
    });
  }
}
