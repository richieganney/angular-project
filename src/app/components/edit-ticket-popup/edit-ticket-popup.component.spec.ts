import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditTicketPopupComponent, EditTicketPopupContent } from './edit-ticket-popup.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { mockItem } from 'src/app/services/mockData';
import { FormBuilder } from '@angular/forms';

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
      providers:    [ {provide: NgbActiveModal, useValue: NgbActiveModalStub}, {provide: HttpClient, useValue: HttpClientStub}, {provide: HttpHandler, useValue: HttpHandlerStub}, {provide: FormBuilder} ]
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

  // it('onSubmit function should work', async(() => {
  // //   spyOn(content, 'onSubmit');
  // //   let button = fixtureContent.nativeElement.querySelector('.btn')
  // //   button.click();
  
  //   // content
  //   // component.form.controls['password'].setValue("123456789");  

  //   // fixtureContent.detectChanges();

  //   // let textName = fixtureContent.nativeElement.querySelector('.name')
  //   // textName.value = 'Test Name';

  //   // let textDescription = fixtureContent.nativeElement.querySelector('.description')
  //   // textDescription.value = 'Test Description';

  //   // let button = fixture.debugElement.nativeElement.querySelector('.btn');
  //   // button.click();

  //   // fixtureContent.detectChanges();

  //   // console.log(textName)
  //   // console.log(textDescription)

  //   // console.log("HELLO")
  //   // console.log(content)
    

  //   // fixtureContent.whenStable().then(() => {
  //   //   expect(component.edit).toHaveBeenCalled();
  //   // });
  // }));
});