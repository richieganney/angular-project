import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTicketPopupComponent, EditTicketPopupContent } from './edit-ticket-popup.component';

describe('EditTicketPopupComponent', () => {
  let component: EditTicketPopupComponent;
  let fixture: ComponentFixture<EditTicketPopupComponent>;

  // const ticket = {
  //   id: 1,
  //   name: "test name",
  //   description: "test description",
  //   category: "add"
  // }

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

  it('edit button should work', async(() => {
    spyOn(component, 'edit');
    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    fixture.whenStable().then(() => {
      expect(component.edit).toHaveBeenCalled();
    });
  }));
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
