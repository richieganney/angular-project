import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketsComponent } from './components/todos/todos.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AddTicketComponent } from './components/add-todo/add-todo.component';
import { AboutComponent } from './components/pages/about/about.component';
import { TicketPopupComponent, TicketPopupContent } from './components/ticket-popup/ticket-popup.component';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditTicketPopupComponent, EditTicketPopupContent } from './components/edit-ticket-popup/edit-ticket-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketsComponent,
    TodoItemComponent,
    HeaderComponent,
    AddTicketComponent,
    AboutComponent,
    TicketPopupComponent,
    TicketPopupContent,
    EditTicketPopupComponent,
    EditTicketPopupContent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
