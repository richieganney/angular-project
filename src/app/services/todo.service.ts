import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo, Tickets } from '../models/Todo';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  ticketsUrl:string = 'http://localhost:3000/tickets';

  constructor(private http:HttpClient) { }

  getTodos():Observable<any> {
    return this.http.get<any>(`${this.ticketsUrl}`);
  }

  toggleCompleted(todo:Todo):Observable<any> {
    const url = `${this.ticketsUrl}/${todo.id}`;
    return this.http.put(url, todo, httpOptions);
  }

  deleteTodo(todo:Todo) {
    const url = `${this.ticketsUrl}/${todo.id}`;
    return this.http.delete<Todo>(url, httpOptions);
  }

  addTodo(todo:Todo):Observable<Todo> {
    return this.http.post<Todo>(this.ticketsUrl, todo, httpOptions);
  }
}
