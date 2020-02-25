import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { TicketsComponent } from '../todos/todos.component'

import { AddTicketComponent } from './add-todo.component';

describe('AddTicketComponent', () => {
  let component: AddTicketComponent;
  let fixture: ComponentFixture<AddTicketComponent>;

  let TicketsComponentStub: Partial<TicketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTicketComponent ],
      providers: [ FormBuilder, { provide: TicketsComponent, useClass: TicketsComponentStub } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('selectChangeHandler should change the category value', () => {
    expect(component.selectedCategory).toBe(undefined)
    const cat = {target: {value: 'add'}}
    component.selectChangeHandler(cat)
    expect(component.selectedCategory).toBe('add')
  })

  it('ADD TICKET: onSubmit should emit a ticket', () => {

    const cat = {target: {value: 'add'}}
    expect(component.reactiveForm.valid).toBeFalsy();

    component.reactiveForm.controls['name'].setValue("name");
    component.reactiveForm.controls['description'].setValue("description");
    component.reactiveForm.controls['category'].setValue("add");
    component.selectChangeHandler(cat)

    expect(component.reactiveForm.valid).toBeTruthy();

    component.onSubmit();

    expect(component.ticketOnSubmit.name).toBe("name");
    expect(component.ticketOnSubmit.description).toBe("description");
    expect(component.ticketOnSubmit.category).toBe("add");
  });
});
