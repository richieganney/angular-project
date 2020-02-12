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
  // @Input() tickets:Tickets;
  name:string;
  description:string;
  category:string;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
  }
  
  onSubmit() {
    console.log("hello")
    console.log(this.name)
    console.log(this.description)
    console.log(this.category)
    // while(true){}
    // console.log(ticket.description)
    // console.log(ticket.category)
    // const ticket = {
    //   name: this.name,
    //   description: this.description,
    //   category: this.category
    // }
    // this.addTodo.emit(todo);
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
  }

}

