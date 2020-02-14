import { Tickets } from '../models/Schema';

export const data = () => {
  const ticketData:Tickets = {
    add: [{id: 1, name: "name", description: "desc", category: "add"}],
    drop: [{id: 2, name: "name", description: "desc", category: "drop"}],
    keep: [{id: 3, name: "name", description: "desc", category: "keep"}],
    improve: [{id: 4, name: "name", description: "desc", category: "improve"}]
  } 
  return ticketData;
}
