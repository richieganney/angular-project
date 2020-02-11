export class Item {
  id:number;
  name:string;
  description:string;
  category:string
}

export class Tickets {
  add:Array<Item>;
  keep:Array<Item>;
  improve:Array<Item>;
  drop:Array<Item>;
}
