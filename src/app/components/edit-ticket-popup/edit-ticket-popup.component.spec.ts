import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditTicketPopupComponent, EditTicketPopupContent } from './edit-ticket-popup.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TodoItemComponent } from '../todo-item/todo-item.component';

describe('EditTicketPopupContent', () => {
  let content: EditTicketPopupContent;
  let fixtureContent: ComponentFixture<EditTicketPopupContent>;
  let component: EditTicketPopupComponent;
  let fixture: ComponentFixture<EditTicketPopupComponent>;

  let TodoItemComponentStub: Partial<TodoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTicketPopupContent, EditTicketPopupComponent ],
      providers: [ NgbActiveModal, FormBuilder, {provide: TodoItemComponent, useClass: TodoItemComponentStub} ],
      imports: [ HttpClientTestingModule ]
      // providers:    [ {provide: NgbActiveModal}, {provide: HttpClient}, {provide: HttpHandler}, {provide: FormBuilder} ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixtureContent = TestBed.createComponent(EditTicketPopupContent);
    content = fixtureContent.componentInstance;
    fixtureContent.detectChanges();

    fixture = TestBed.createComponent(EditTicketPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('edit button should work', async(() => {
    spyOn(component, 'edit');

    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();

    fixture.whenStable().then(() => {
      expect(component.edit).toHaveBeenCalled();
    });
  }));

  it('selectChangeHandler should change the category value', () => {
    expect(content.selectedCategory).toBe(undefined)
    const cat = {target: {value: 'add'}}
    content.selectChangeHandler(cat)
    expect(content.selectedCategory).toBe('add')
  })

  it('EDIT TICKET: onSubmit should emit a ticket', () => {

    let TodoItemComponentStub = {
      emit(){
        return 0;
      }
    }

    const cat = {target: {value: 'add'}}
    expect(content.reactiveForm.valid).toBeFalsy();

    content.reactiveForm.controls['name'].setValue("name");
    content.reactiveForm.controls['description'].setValue("description");
    content.reactiveForm.controls['category'].setValue("add");
    content.selectChangeHandler(cat)

    expect(content.reactiveForm.valid).toBeTruthy();

    content.onSubmit(1, TodoItemComponentStub);

    expect(content.ticketOnSubmit.name).toBe("name");
    expect(content.ticketOnSubmit.description).toBe("description");
    expect(content.ticketOnSubmit.category).toBe("add");
    expect(content.ticketOnSubmit.id).toBe(1);
  });
});
