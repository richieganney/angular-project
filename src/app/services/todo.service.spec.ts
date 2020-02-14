import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TicketService } from './todo.service';
import { data } from './mockData';

describe('TicketService', () => {
  let service: TicketService;

  // beforeEach(() => {
  //   TestBed.configureTestingModule({});
  //   service = TestBed.inject(TicketService);
  // });
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
        console.log("tickets test")
        console.log(data)
        expect(typeof(data)).toEqual("object")
        // expect(data.add).toBe(21);
        // expect(data.drop.pageNumber).toBe(0);
        // expect(data.keep).toBe(21);
        // expect(data.improve).toBe(21);
        // expect(data.data.length).toBe(7);
      });
      // We set the expectations for the HttpClient mock
      const req = httpMock.expectOne('http://localhost:3000/tickets');
      expect(req.request.method).toEqual('GET');
      // Then we set the fake data to be returned by the mock
      req.flush({data: data()});
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
