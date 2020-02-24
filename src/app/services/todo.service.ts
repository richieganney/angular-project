import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item, Tickets } from '../models/Schema';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
}
@Injectable({
  providedIn: 'root'
})
export class TicketService {
  ticketsUrl:string = 'http://localhost:3000/tickets';

  constructor(private http:HttpClient) { }

  getTickets():Observable<Tickets> {
    return this.http.get<Tickets>(`${this.ticketsUrl}`);
  }

  deleteTicket(todo:Item) {
    const url = `${this.ticketsUrl}/${todo.id}`;
    return this.http.delete<Item>(url, httpOptions);
  }

  addTicket(todo:Item):Observable<Item> {
    return this.http.post<Item>(this.ticketsUrl, todo, httpOptions)
  }

  editTicket(ticket:Item) {
    const putUrl = `${this.ticketsUrl}/${ticket.id}`
    const item = {
      name: ticket.name,
      description: ticket.description,
      category: ticket.category
    }
    return this.http.put<Item>(putUrl, item, httpOptions)
  }
}
