import { Component, OnInit, Input } from '@angular/core';
import { Item, Tickets } from 'src/app/models/Schema';
import { TicketService } from '../../services/todo.service';
import "@angular/compiler";
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ticket-popup-content',
  templateUrl: 'ticket-popup-content.component.html'
})
export class TicketPopupContent {
  @Input() ticket:Item;

  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'app-ticket-component',
  templateUrl: './ticket-popup.component.html'
})
export class TicketPopupComponent {
  @Input() ticket:Item;

  constructor(private modalService: NgbModal) {}

  open(ticket:Item) {
    const modalRef = this.modalService.open(TicketPopupContent);
    modalRef.componentInstance.ticket = ticket;
  }
}
