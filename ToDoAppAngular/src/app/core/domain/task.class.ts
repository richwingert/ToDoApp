export class Task {

  //private members
  private _id: number;
  private _name: string;
  private _dueDate: Date;
  private _description: string;
  private _isComplete: boolean;
  private _priority: number;

  //constructor to take any of the above elements
  constructor(o: any){
    if(o){
      if(o.id)          this._id =          o.id;
      if(o.name)        this._name =        o.name;
      if(o.dueDate)     this._dueDate =     new Date(o.dueDate);
      if(o.description) this._description = o.description;
      if(o.isComplete)  this._isComplete =  o.isComplete;
      if(o.priority)    this._priority =    o.priority;
    }
  }


  //Getters and Setters
  get id(): number {return this._id;}
  set id(value: number) {this._id = value;}

  get name(): string {return this._name;}
  set name(value: string) {this._name = value;}

  get dueDate(): Date {return this._dueDate;}
  set dueDate(value: Date) {this._dueDate = value;}

  get description(): string {return this._description;}
  set description(value: string) {this._description = value;}

  get isComplete(): boolean {return this._isComplete;}
  set isComplete(value: boolean) {this._isComplete = value;}

  get priority(): number {return this._priority;}
  set priority(value: number) {this._priority = value;}
}
