import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TicketService } from './todo.service';
import { mockData } from './mockData';
import { Tickets } from '../models/Schema';

describe('TicketService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TicketService],
      imports: [
        HttpClientTestingModule
      ],
    });
  });

  it('expects service to fetch data with proper sorting',
    inject([HttpTestingController, TicketService],
    (httpMock: HttpTestingController, service: TicketService) => {

      // We call the service
      service.getTickets().subscribe(data => {
        var joc = jasmine.objectContaining;

        // console.log("tickets test")
        // console.log(joc(data.add[0]))
        // console.log(mockData())
        // console.log(data)

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

  // beforeEach(() => { service = new ValueService(); });

  // it('#getTickets should return real value', () => {
  //   expect(service.getTickets()).toBe('real value');
  // });

  // it('#getObservableValue should return value from observable',
  //   (done: DoneFn) => {
  //   service.getObservableValue().subscribe(value => {
  //     expect(value).toBe('observable value');
  //     done();
  //   });
  // });

  // it('#getPromiseValue should return value from a promise',
  //   (done: DoneFn) => {
  //   service.getPromiseValue().then(value => {
  //     expect(value).toBe('promise value');
  //     done();
  //   });
  // });

});
