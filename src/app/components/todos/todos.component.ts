import { Component, OnInit } from '@angular/core';
import { Item, Tickets } from '../../models/Schema';
import { TicketService } from '../../services/todo.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html'
})

export class TicketsComponent implements OnInit {
  todos:any;
  tickets:Tickets;
  isLoaded:boolean = false;

  constructor(private ticketService:TicketService) { }

  ngOnInit() {
    this.ticketService.getTickets().subscribe(tickets => {
      this.tickets = tickets;
      this.isLoaded = true;
    });
  }

  deleteTodo(ticket:Item) {
    const category = ticket.category
    this.ticketService.deleteTicket(ticket).subscribe(t => {
    }, error => {
      this.tickets[category] = this.tickets[category].filter(t => t.id !== ticket.id);
      const data = this.tickets[category];
      this.handleResponse(error, data);
    });
  }

  addTodo(ticket:Item) {
    this.ticketService.addTicket(ticket).subscribe(t => {
    }, error => {
      const data = this.tickets[ticket.category].push(ticket);
      this.handleResponse(error, data);
    });
  }

  editTicket(ticket:Item) {
    this.ticketService.editTicket(ticket).subscribe(t => {
    }, error => {
      Object.keys(this.tickets).forEach(category => 
        this.tickets[category] = this.tickets[category].filter(t => t.id !== ticket.id)
      );
      const data = this.tickets[ticket.category].push(ticket);
      this.handleResponse(error, data);
    });
  };

  private handleResponse(response:HttpErrorResponse, data:any) {
    if(response.status == 201 || 200) {
      return data
    } else {
      console.log(response);
    }
  }
}
