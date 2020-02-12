import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTicketPopupComponent } from './edit-ticket-popup.component';

describe('EditTicketPopupComponent', () => {
  let component: EditTicketPopupComponent;
  let fixture: ComponentFixture<EditTicketPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTicketPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTicketPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
