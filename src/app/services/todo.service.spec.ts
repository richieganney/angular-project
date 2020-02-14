import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TicketService } from './todo.service';
import { mockData, mockItem } from './mockData';

describe('TicketService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TicketService],
      imports: [
        HttpClientTestingModule
      ],
    });
  });

  it('expects service to GET data',
    inject([HttpTestingController, TicketService],
    (httpMock: HttpTestingController, service: TicketService) => {

      // We call the service
      service.getTickets().subscribe(data => {
        var joc = jasmine.objectContaining;

        expect(data).toEqual(mockData());
        expect(joc(data.add[0])).toEqual(joc(mockData().add[0]));
        expect(joc(data.drop[0])).toEqual(joc(mockData().drop[0]));
        expect(joc(data.keep[0])).toEqual(joc(mockData().keep[0]));
        expect(joc(data.improve[0])).toEqual(joc(mockData().improve[0]));
      });

      // We set the expectations for the HttpClient mock
      const req = httpMock.expectOne('http://localhost:3000/tickets');
      expect(req.request.method).toEqual('GET');

      // Then we set the fake data to be returned by the mock
      req.flush(mockData());
    })
);

  it('expects service to DELETE data',
    inject([HttpTestingController, TicketService],
    (httpMock: HttpTestingController, service: TicketService) => {

      service.deleteTicket(mockItem()).subscribe(data => {
        expect(data.id).toEqual(mockItem().id)
      });

      const req = httpMock.expectOne(`http://localhost:3000/tickets/${mockItem().id}`);
      expect(req.request.method).toEqual('DELETE');

      req.flush(mockItem());
    })
  );

  it('expects service to POST data',
    inject([HttpTestingController, TicketService],
    (httpMock: HttpTestingController, service: TicketService) => {

      service.addTicket(mockItem()).subscribe(data => {
        expect(data).toEqual(mockItem())
      });

      const req = httpMock.expectOne('http://localhost:3000/tickets');
      expect(req.request.method).toEqual('POST');

      req.flush(mockItem());
    })
  );

  it('expects service to PUT data',
    inject([HttpTestingController, TicketService],
    (httpMock: HttpTestingController, service: TicketService) => {

      service.editTicket(mockItem()).subscribe(data => {
        expect(data.id).toEqual(mockItem().id)
      });

      const req = httpMock.expectOne(`http://localhost:3000/tickets/${mockItem().id}`);
      expect(req.request.method).toBe('PUT');

      req.flush(mockItem());
    })
  );
});
