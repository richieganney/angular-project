export class Todo {
  id:number;
  name:string;
  description:string;
  category:string
}

export class Tickets {
  add:Array<Todo>;
  keep:Array<Todo>;
  improve:Array<Todo>;
  drop:Array<Todo>;
}
