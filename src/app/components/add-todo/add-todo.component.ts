import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  @Output() addTodo: EventEmitter<any> = new EventEmitter();

  name:string;
  description:string;
  category:string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.name)
    console.log(this.description)
    const todo = {
      name: this.name,
      description: this.description,
      category: this.category
    }
    this.addTodo.emit(todo);
  }

}
