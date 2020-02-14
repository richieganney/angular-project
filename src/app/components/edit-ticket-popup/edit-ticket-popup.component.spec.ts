import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTicketPopupComponent, EditTicketPopupContent } from './edit-ticket-popup.component';

describe('EditTicketPopupComponent', () => {
  let component: EditTicketPopupComponent;
  let fixture: ComponentFixture<EditTicketPopupComponent>;

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
