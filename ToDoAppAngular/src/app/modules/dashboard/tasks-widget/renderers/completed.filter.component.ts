import {Component} from "@angular/core";
import {IDoesFilterPassParams, IFilterParams, RowNode} from "ag-grid-community";
import {IFilterAngularComp} from "ag-grid-angular";

@Component({
  selector: 'filter-cell',
  template: `
    <div class="container">
      <!--Complete Tasks checkbox-->
      <div class="form-check">
        <input [(ngModel)]="completeCheck"
               type="checkbox"
               class="form-check-input pointer"
               (ngModelChange)="onChange($event)"
               id="complete">
        <label class="form-check-label" for="complete">Complete</label>
      </div>
      <!--Incomplete Tasks checkbox-->
      <div class="form-check">
        <input [(ngModel)]="incompleteCheck"
               type="checkbox"
               class="form-check-input pointer"
               (ngModelChange)="onChange($event)"
               id="incomplete">
        <label class="form-check-label" for="incomplete">Incomplete</label>
      </div>
    </div>
  `,
  styles: [`
    .container {height: 50px}
    .form-check{padding-top: 5px;}
    .form-check-label{padding-top: 5px;}
  `]
})
export class CompletedFilterComponent implements IFilterAngularComp {
  private params: IFilterParams;
  private valueGetter: (rowNode: RowNode) => any;
  completeCheck: boolean = false;
  incompleteCheck: boolean = false;


  agInit(params: IFilterParams): void {
    this.params = params;
    this.valueGetter = params.valueGetter;
  }

  //this function is used to determine if the active filter icon should be shown in the header
  isFilterActive(): boolean {
    return this.completeCheck || this.incompleteCheck;
  }

  //for each row, this function determines if the row should be shown or not, based on the checkbox values
  doesFilterPass(params: IDoesFilterPassParams): boolean {
    return (this.completeCheck && params.data.completed) || (this.incompleteCheck && !params.data.completed);
  }

  getModel(): any {
    return {value: this.completeCheck || this.incompleteCheck};
  }

  setModel(model: any): void {
    this.completeCheck = model ? model.value : '';
  }

  onChange(): void {
    this.params.filterChangedCallback();
  }
}
