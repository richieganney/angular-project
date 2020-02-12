import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTicketComponent implements OnInit {
  @Output() addTodo: EventEmitter<any> = new EventEmitter();

  name:string;
  description:string;
  category:string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    const todo = {
      name: this.name,
      description: this.description,
      category: this.category
    }
    this.addTodo.emit(todo);
  }

}
