import {Component} from "@angular/core";
import {ICellRendererAngularComp} from "ag-grid-angular";

@Component({
  selector: 'date-renderer',
  template: `
    <i *ngIf="isPastDue"
       title="Past Due!"
       class="fa fa-exclamation red fa-2x"></i>
    <i *ngIf="isDueSoon"
       title="Due Today or Tomorrow!"
       class="fa fa-exclamation blue fa-2x"></i>
    {{params.data.dueDate | date:'shortDate'}}
  `,
  styles: [``]
})

export class DateRendererComponent implements ICellRendererAngularComp {
  public params: any;
  public isPastDue: boolean = false;
  public isDueSoon: boolean = false;

  agInit(params: any): void {
    this.params = params;

    //initialize the variable that shows if the task is due soon or is past due
    let dueDate: Date = new Date(params.data.dueDate);
    this.isDueSoon = params.data.dueDate
      ? this.isToday(dueDate) || this.isTomorrow(dueDate)
      : false;
    this.isPastDue = params.data.dueDate
      ? this.isPast(dueDate)
      : false;
    console.log(params.data.dueDate)
  }

  refresh(): boolean {return false;}

  /**
   * Helper function to determine if some date is in the past
   * @param someDate The date to check
   * @returns {boolean} Whether the date is in the past or not
   */
  isPast(someDate) {
    const today = new Date();
    return someDate.getDate() < today.getDate();
  }

  /**
   * Helper function to determine if some date is today
   * @param someDate The date to check
   * @returns {boolean} Whether the date is today or not
   */
  isToday(someDate) {
    const today = new Date();
    return someDate.getDate() == today.getDate() &&
      someDate.getMonth() == today.getMonth() &&
      someDate.getFullYear() == today.getFullYear()
  }

  /**
   * Helper function to determine if some date is tomorrow
   * @param someDate The date to check
   * @returns {boolean} Whether the date is tomorrow or not
   */
  isTomorrow(someDate) {
    const today = new Date();
    return someDate.getDate() == today.getDate() + 1 &&
      someDate.getMonth() == today.getMonth() &&
      someDate.getFullYear() == today.getFullYear()
  };

}
