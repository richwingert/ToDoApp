export class Task {

  //private members
  id: number;
  name: string;
  dueDate: Date;
  description: string;
  completed: boolean;
  priority: number;

  //constructor to take any of the above elements
  constructor(o: any) {
    if (o) {
      let clone = JSON.parse(JSON.stringify(o)); //create disassociated clone
      if (clone.id)          this.id = clone.id;
      if (clone.name)        this.name = clone.name;
      if (clone.dueDate)     this.dueDate = new Date(clone.dueDate);
      if (clone.description) this.description = clone.description;
      if (clone.completed)   this.completed = clone.completed;
      if (clone.priority)    this.priority = clone.priority;
    }
  }
}
