import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Item, Tickets } from 'src/app/models/Schema';
import { TicketService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo:Item;
  @Input() tickets:Tickets;
  @Output() deleteTodo: EventEmitter<Item> = new EventEmitter();
  @Output() editTicket: EventEmitter<Item> = new EventEmitter();
  indexes:Array<number> = [0, 1, 2, 3];

  constructor(private ticketService:TicketService) {}
  
  ngOnInit(): void {
  };

  // set dynamic classes
  setClasses() {
    let classes = {
      todo: true,
      tickets: true
    };
    return classes;
  };

  ticketGetter(tickets:Tickets) {
    return Object.values(tickets);
  };

  getCategory(index, tickets:Tickets): String {
    const result = Object.keys(tickets)[index];
    return `${result.charAt(0).toUpperCase()}${result.slice(1)}`;
  };

  onDelete(ticket, func) {
    func.emit(ticket);
  };

  onEdit(ticket:Item, func) {
    func.emit(ticket);
  };
};
