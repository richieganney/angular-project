import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTicketPopupComponent, EditTicketPopupContent } from './edit-ticket-popup.component';

describe('EditTicketPopupComponent', () => {
  let component: EditTicketPopupComponent;
  let fixture: ComponentFixture<EditTicketPopupComponent>;

  let fixtureContent: ComponentFixture<EditTicketPopupContent>;
  let content: EditTicketPopupContent;

  const ticket = {
    id: 1,
    name: "test name",
    description: "test description",
    category: "add"
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTicketPopupComponent, EditTicketPopupContent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTicketPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {



  });
});

// describe('EditTicketPopupContent', () => {
//   let component: EditTicketPopupContent;
//   let fixture: ComponentFixture<EditTicketPopupContent>;
//   const ticket = {
//     id: 1,
//     name: "test name",
//     description: "test description",
//     category: "add"
//   }

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ EditTicketPopupContent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(EditTicketPopupContent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     console.log("Hello")
//     console.log(component.name);
//     expect(component).toBeTruthy();
//   });
// });
