import {Component, OnInit, ViewChild} from '@angular/core';
import {TasksService} from "../../../core/services/tasks.service";

@Component({
  selector: 'edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss']
})
export class EditModalComponent implements OnInit {

  constructor(private tasksService: TasksService) { }

  ngOnInit() {
    this.tasksService.showEditModal$.subscribe(data =>{
      console.log(data);
    })
  }


}
