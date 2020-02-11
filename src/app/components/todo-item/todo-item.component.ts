import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo, Tickets } from 'src/app/models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo:Todo;
  @Input() tickets:Tickets;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    console.log("hello")
    console.log(this.tickets)
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
    console.log(todo);
  }
}
