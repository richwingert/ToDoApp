import {Component, ElementRef, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {TasksService} from "../../../core/services/tasks.service";
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {Task} from "../../../core/domain/task.class";

@Component({
  selector: 'edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss']
})
export class EditModalComponent implements OnInit {
  @ViewChild('template',null) modal: TemplateRef<ElementRef>;
  modalRef: BsModalRef;
  mode: string;
  confirmText: string;
  task: Task;

  constructor(private tasksService: TasksService, private modalService: BsModalService) { }

  ngOnInit() {
    this.tasksService.showEditModal$.subscribe(data =>{
      this.mode = data.mode;
      this.confirmText = data.confirmText;
      this.task = data.task;
      this.openModal(this.modal);
    })
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  save(){
    this.tasksService.createTask(this.task).subscribe((tasks: Task[]) => {
      this.modalRef.hide();
      this.tasksService.api.setRowData(tasks);
    });
  }
}
