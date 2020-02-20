import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditTicketPopupComponent, EditTicketPopupContent } from './edit-ticket-popup.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { mockItem } from 'src/app/services/mockData';
import { FormBuilder } from '@angular/forms';
import { Item } from 'src/app/models/Schema';
import { connect } from 'tls';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('EditTicketPopupContent', () => {
  let content: EditTicketPopupContent;
  let fixtureContent: ComponentFixture<EditTicketPopupContent>;

  let component: EditTicketPopupComponent;
  let fixture: ComponentFixture<EditTicketPopupComponent>;

  let NgbActiveModalStub: Partial<NgbActiveModal>;
  let HttpClientStub: Partial<HttpClient>;
  let HttpHandlerStub: Partial<HttpHandler>;
  let FormBuilderStub: Partial<FormBuilder>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTicketPopupContent, EditTicketPopupComponent ],
      providers:    [ NgbActiveModal, FormBuilder ],
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

  it('onSubmit should emit a ticket', () => {
    const cat = {target: {value: 'add'}}
    expect(content.reactiveForm.valid).toBeFalsy();

    content.reactiveForm.controls['name'].setValue("name");
    content.reactiveForm.controls['description'].setValue("description");
    content.reactiveForm.controls['category'].setValue("add");
    content.selectChangeHandler(cat)

    expect(content.reactiveForm.valid).toBeTruthy();

    content.onSubmit(1);

    expect(content.ticketOnSubmit.name).toBe("name");
    expect(content.ticketOnSubmit.description).toBe("description");
    expect(content.ticketOnSubmit.category).toBe("add");
    expect(content.ticketOnSubmit.id).toBe(1);
  })


});