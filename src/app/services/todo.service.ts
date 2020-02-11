import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item, Tickets } from '../models/Schema';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
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

  // toggleCompleted(todo:Todo):Observable<any> {
  //   const url = `${this.ticketsUrl}/${todo.id}`;
  //   return this.http.put(url, todo, httpOptions);
  // }

  deleteTicket(todo:Item) {
    const url = `${this.ticketsUrl}/${todo.id}`;
    return this.http.delete<Item>(url, httpOptions);
  }

  addTicket(todo:Item):Observable<Item> {
    return this.http.post<Item>(this.ticketsUrl, todo, httpOptions);
  }
}
