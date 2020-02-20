import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Item, Tickets } from 'src/app/models/Schema';
import { TicketService } from '../../services/todo.service';
import { stringify } from '@angular/compiler/src/util';

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
  indexes:Array<number> = [0, 1, 2, 3];

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

  ticketGetter() {
    return Object.values(this.tickets)
  }

  getCategory(index) {
    const result = Object.keys(this.tickets)[index]
    return `${result.charAt(0).toUpperCase()}${result.slice(1)}`;
  }

  onDelete(todo) {
    this.deleteTodo.emit(todo);
  }
}
