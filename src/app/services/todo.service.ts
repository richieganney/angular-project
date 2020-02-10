import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodos() {
    return [
      {
        id: 1,
        title: 'todo one',
        completed: false
      },
      {
        id: 2,
        title: 'todo two',
        completed: false
      },
      {
        id: 3,
        title: 'todo three',
        completed: false
      }
    ]
  }
}
