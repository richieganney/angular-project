import { Component, OnInit } from '@angular/core';
import { Item, Tickets } from '../../models/Schema';
import { TicketService } from '../../services/todo.service';

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
      this.isLoaded = true
    });
  }

  deleteTodo(ticket:Item) {
    const category = ticket.category
    this.tickets[category] = this.tickets[category].filter(t => t.id !== ticket.id)
    this.ticketService.deleteTicket(ticket).subscribe();
  }

  addTodo(ticket:Item) {
    this.ticketService.addTicket(ticket).subscribe(t => {
      this.tickets[t.category].push(t);
    });
  }
}

// ngOnInit() {
//   this.refreshData();
// }

// private refreshData(): void {
//   this.ticketsSubscription = this.ticketService.getTickets().subscribe(tickets => {
//     this.tickets = tickets;
//     this.isLoaded = true;
//     this.subscribeToData();
//   });
// }
//   public ngOnDestroy(): void {
//     if (this.ticketsSubscription) {
//         this.ticketsSubscription.unsubscribe();
//     }
//     if (this.timerSubscription) {
//         this.timerSubscription.unsubscribe();
//     }
//   }

// private subscribeToData(): void {
//   // let timer$ = timer(2000,1000);
//   this.timerSubscription = Observable.timer(5000).first().subscribe(() => this.refreshData());
// }

// deleteTodo(ticket:Item) {
//   const category = ticket.category
//   this.tickets[category] = this.tickets[category].filter(t => t.id !== ticket.id)
//   this.ticketService.deleteTicket(ticket).subscribe();
// }

// addTodo(ticket:Item) {
//   this.ticketService.addTicket(ticket).subscribe(t => {
//     this.tickets[t.category].push(t);
//   });
// }
