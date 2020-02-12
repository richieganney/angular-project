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
  @Output() editTicket: EventEmitter<any> = new EventEmitter();

  constructor(private ticketService:TicketService) { }

  ngOnInit(): void {
  }

  // set dynamic classes
  setClasses() {
    let classes = {
      todo: true,
      tickets: true
    }
    return classes;
  }

  onDelete(todo) {
    this.deleteTodo.emit(todo);
  }

  // editItem(ticket:Item) {
  //   this.editTicket.emit(ticket)
  //   console.log("item function done")
  // }

}
