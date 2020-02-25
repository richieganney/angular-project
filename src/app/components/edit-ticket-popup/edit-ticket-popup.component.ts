import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Item, Tickets } from 'src/app/models/Schema';
import { TicketService } from '../../services/todo.service';
import "@angular/compiler";
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'edit-ticket-popup-content',
  templateUrl: './edit-ticket-content.html'
})
export class EditTicketPopupContent implements OnInit {
  @Input() ticket:Item;
  @Input() onEditContent;

  name:string;
  description:string;
  selectedCategory:string;
  ticketOnSubmit:Item;
  reactiveForm: FormGroup;
  
  constructor(public activeModal:NgbActiveModal, private ticketService:TicketService, private fb: FormBuilder) {}
  
  ngOnInit(): void {
    this.createForm();
  }
  
  createForm() {
    this.reactiveForm = this.fb.group({
      name: [this.name, Validators.required],
      description: [this.description, Validators.required],
      category: [this.selectedCategory, Validators.required]
    });
  }

  onSubmit(id:number) {
    this.ticketOnSubmit = {
      name: this.reactiveForm.value.name,
      description: this.reactiveForm.value.description,
      category: this.selectedCategory,
      id: id
    }
    this.onEditContent.emit(this.ticketOnSubmit)
    this.activeModal.dismiss('Cross click')
  }

  selectChangeHandler(event:any) {
    this.selectedCategory = event.target.value;
  }
}

@Component({
  selector: 'app-edit-ticket-component',
  templateUrl: './edit-ticket-popup.component.html'
})
export class EditTicketPopupComponent {
  @Input() ticket:Item;
  @Output() onEdit: EventEmitter<any> = new EventEmitter();

  constructor(private modalService: NgbModal) {}

  edit(ticket:Item) {
    const modalRef = this.modalService.open(EditTicketPopupContent);
    modalRef.componentInstance.onEditContent = this.onEdit
    modalRef.componentInstance.ticket = ticket;
    modalRef.componentInstance.name = ticket.name;
    modalRef.componentInstance.description = ticket.description;
    modalRef.componentInstance.selectedCategory = ticket.category;
  }
}
