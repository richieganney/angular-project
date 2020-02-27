import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TicketsComponent } from './todos.component';
import { HttpHeaders, HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TicketService } from 'src/app/services/todo.service';

describe('TodosComponent', () => {
  let component: TicketsComponent;
  let fixture: ComponentFixture<TicketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketsComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("handleResponse should return the correct data", () => {
    const response:HttpErrorResponse = {
      status: 201,
      headers: new HttpHeaders(),
      statusText: "OK", 
      url: "http://DummyURL:3000/tickets/001", 
      ok: false,
      name: "HttpErrorResponse",
      message: "Http failure during parsing for http://DummyURL:3000/tickets/146",
      error: {error: SyntaxError},
      type: HttpEventType.ResponseHeader
    }

    expect(component.handleResponse(response, "DummyData")).toBe("DummyData")
  });

  it("handleResponse should return the dummy error", () => {
    const response:HttpErrorResponse = {
      status: 404,
      headers: new HttpHeaders(),
      statusText: "OK", 
      url: "http://DummyURL:3000/tickets/001", 
      ok: false,
      name: "HttpErrorResponse",
      message: "Http failure during parsing for http://DummyURL:3000/tickets/146",
      error: {error: SyntaxError},
      type: HttpEventType.ResponseHeader
    }
    
    spyOn(window.console, 'log');
    component.handleResponse(response, "DummyData")
    
    expect(window.console.log).toHaveBeenCalled();
  });
});
