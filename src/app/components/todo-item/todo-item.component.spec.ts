import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoItemComponent } from './todo-item.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { mockData } from './mockData';
import { TicketsComponent } from '../todos/todos.component';
import { mockItem } from 'src/app/services/mockData';

describe('TodoItemComponent', () => {
  let component: TodoItemComponent;
  let fixture: ComponentFixture<TodoItemComponent>;
  let TicketsComponentStub: Partial<TicketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoItemComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [ {provide: TicketsComponent, useClass: TicketsComponentStub} ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemComponent);
    component = fixture.componentInstance;
  });

  it("ticketGetter should return the an array of ticket arrays", () => {
    const result = component.ticketGetter(mockData());
    expect(result).toEqual(Object.values(mockData()));
  });

  it("getCategory should return an array of categories with the first letter capitalised", () => {
    const add = component.getCategory(0, mockData());
    const drop = component.getCategory(1, mockData());
    const keep = component.getCategory(2, mockData());
    const improve = component.getCategory(3, mockData());
    expect(add).toEqual("Add");
    expect(drop).toEqual("Drop");
    expect(keep).toEqual("Keep");
    expect(improve).toEqual("Improve");
  });

  it("onDelete should delete a ticket", () => {
    let TicketsComponentStub = {
      emit(){
        return 0;
      }
    }

    component.onDelete(mockData(), TicketsComponentStub);
    expect(TicketsComponentStub).toHaveBeenCalled;
  });

  it("onEdit should edit a ticket", () => {
    let TicketsComponentStub = {
      emit(){
        return 0;
      }
    }

    component.onEdit(mockItem(), TicketsComponentStub);
    expect(TicketsComponentStub).toHaveBeenCalled;
  });

  it("setClasses should set the classes", () => {
    let mockClasses = {
      todo: true,
      tickets: true
    };

    expect(component.setClasses()).toEqual(mockClasses)
  });
});
