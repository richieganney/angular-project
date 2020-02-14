import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Item, Tickets } from 'src/app/models/Schema';
import { TicketService } from '../../services/todo.service';
import "@angular/compiler";
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'edit-ticket-popup-content',
  templateUrl: './edit-ticket-content.html'
})
export class EditTicketPopupContent implements OnInit {
  @Input() ticket:Item;
  @Output() editItem: EventEmitter<any> = new EventEmitter();
  @Output() editTicket: EventEmitter<any> = new EventEmitter();
  // @Input() tickets:Tickets;
  name:string;
  description:string;
  selectedCategory:string;
  
  constructor(public activeModal:NgbActiveModal, private ticketService:TicketService) {}
  
  ngOnInit(): void {
  }
  
  onSubmit(id:number) {
    const ticket = {
      name: this.name,
      description: this.description,
      category: this.selectedCategory,
      id: id
    }
    this.ticketService.editTicket(ticket).subscribe();
    location.reload();
  }

  selectChangeHandler(event:any) {
    this.selectedCategory = event.target.value;
  }
}

@Component({
  selector: 'app-edit-ticket-component',
  templateUrl: './edit-ticket-popup.component.html',
  styleUrls: ['./edit-ticket-popup.component.css']
})
export class EditTicketPopupComponent {
  @Input() ticket:Item;

  constructor(private modalService: NgbModal) {}

  edit(ticket:Item) {
    const modalRef = this.modalService.open(EditTicketPopupContent);
    modalRef.componentInstance.ticket = ticket;
    modalRef.componentInstance.name = ticket.name;
    modalRef.componentInstance.description = ticket.description;
  }
}
