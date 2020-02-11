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

  deleteTodo(todo:Todo) {
    this.todos = this.todos.filter(t => t.id !== todo.id)
    this.todoService.deleteTodo(todo).subscribe();
    console.log('done')
  }

  addTodo(todo:Todo) {
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo);
      console.log("done")
    });
  }

}
