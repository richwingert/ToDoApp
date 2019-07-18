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
      if (o.id)          this.id = o.id;
      if (o.name)        this.name = o.name;
      if (o.dueDate)     this.dueDate = new Date(o.dueDate);
      if (o.description) this.description = o.description;
      if (o.completed)   this.completed = o.completed;
      if (o.priority)    this.priority = o.priority;
    }
  }
}
