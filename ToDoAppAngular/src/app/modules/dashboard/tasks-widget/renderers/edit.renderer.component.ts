import {Component} from "@angular/core";
import {ICellRendererAngularComp} from "ag-grid-angular";

@Component({
  selector: 'edit-renderer',
  template: `
    <i class="fa fa-edit fa-2x green pointer" 
       (click)="editTask()">
    </i>
  `,
  styles: [``]
})

export class EditRendererComponent implements ICellRendererAngularComp {
  public params: any;

  agInit(params: any): void {
    this.params = params;
  }

  refresh(): boolean {return false;}

  /**
   * Click event to show editing modal
   */
  editTask(){

  }
}
