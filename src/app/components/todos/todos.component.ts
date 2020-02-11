import { Component, OnInit } from '@angular/core';
import { Todo, Tickets } from '../../models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit {
  todos:any;
  tickets:Tickets;
  isLoaded:boolean = false;

  constructor(private todoService:TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(tickets => {
      this.tickets = tickets;
      this.isLoaded = true
    });
  }

  deleteTodo(ticket:Todo) {
    const category = ticket.category
    this.tickets[category] = this.tickets[category].filter(t => t.id !== ticket.id)
    this.todoService.deleteTodo(ticket).subscribe();
  }

  addTodo(ticket:Todo) {
    this.todoService.addTodo(ticket).subscribe(t => {
      this.tickets[t.category].push(t);
    });
  }
}
