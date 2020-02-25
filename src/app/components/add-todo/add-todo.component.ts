import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Item } from 'src/app/models/Schema';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html'
})
export class AddTicketComponent implements OnInit {
  @Output() addTodo: EventEmitter<any> = new EventEmitter();

  name:string;
  description:string;
  selectedCategory:string;
  ticketOnSubmit:Item;
  reactiveForm: FormGroup;

  constructor(private fb: FormBuilder) { };

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.reactiveForm = this.fb.group({
      name: [this.name, Validators.required],
      description: [this.description, Validators.required],
      category: [this.selectedCategory, Validators.required]
    });
  };

  onSubmit() {
    this.ticketOnSubmit = {
      name: this.reactiveForm.value.name,
      description: this.reactiveForm.value.description,
      category: this.selectedCategory
    };
    this.addTodo.emit(this.ticketOnSubmit);
    this.reactiveForm.controls['name'].setValue("");
    this.reactiveForm.controls['description'].setValue("");
    this.reactiveForm.controls['category'].setValue("");
  };

  selectChangeHandler(event:any) {
    this.selectedCategory = event.target.value;
  };
};
