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
  selectedCategory:string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    const todo = {
      name: this.name,
      description: this.description,
      category: this.selectedCategory
    }
    this.addTodo.emit(todo);
  }

  selectChangeHandler(event:any) {
    this.selectedCategory = event.target.value;
  }

}
