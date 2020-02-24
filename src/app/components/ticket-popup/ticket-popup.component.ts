import { Component, OnInit, Input } from '@angular/core';
import { Item, Tickets } from 'src/app/models/Schema';
import { TicketService } from '../../services/todo.service';
import "@angular/compiler";
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ticket-popup-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">{{ ticket.name }}</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>{{ ticket.description }}</p>
    </div>
    <div class="modal-footer">
    </div>
  `
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
