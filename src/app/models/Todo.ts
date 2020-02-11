export class Todo {
  id:number;
  name:string;
  description:string;
  category:string
}

export class Tickets {
  add:Array<Todo>;
}
