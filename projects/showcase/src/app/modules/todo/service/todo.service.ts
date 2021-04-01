import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { TodoItem } from '../../../data/schema/todo-item'

// A service becomes singleton when we apply providedIn
@Injectable({
  providedIn: 'root',
})
export class TodoService {
  readonly baseUrl = 'https://jsonplaceholder.typicode.com/'

  constructor(private http: HttpClient) {}

  /* 
  POST – Create
  GET – Read/Retrieve
  PUT/PATCH – Update
  DELETE – Delete
  */
  getTodos(): Observable<TodoItem[]> {
    return this.http.get<TodoItem[]>(this.baseUrl + 'todos')
  }

  getTodo(id) {
    if (!id) throw 'empty id'
  }

  createTodo(todo) {
    if (!todo) throw 'empty todo'
  }

  // PUT overwrites the entire entity if it already exists, and creates a new resource if it doesn’t exist.
  updateTodo(todo) {
    if (!todo) throw 'empty todo'
  }

  // PATCH is used when you want to apply a partial update to the resource.
  updateTodoCompleteStatus(id, completed) {
    if (!id) throw 'empty todo id'
  }

  deleteTodo(id) {
    if (!id) throw 'empty todo id'
  }
}
