import { Component, OnInit } from '@angular/core'
import { TodoItem } from 'projects/showcase/src/app/data/schema/todo-item'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { TodoService } from '../../service/todo.service'

/**
 * Container Component
 */
@Component({
  selector: 'todo-list-container',
  templateUrl: './todo-list.container.component.html',
  styleUrls: ['./todo-list.container.component.scss'],
})
export class TodoListContainerComponent implements OnInit {
  todoList$: Observable<TodoItem[]>

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoList$ = this.todoService
      .getTodos()
      .pipe(map((toDoList: TodoItem[]) => toDoList.slice(0, 10)))
  }

  onAddTodo($event) {
    console.log('onAddTodo', $event)
  }

  onUpdateTodo($event) {
    console.log('onUpdateTodo', $event)
  }

  onRemoveTodo($event) {
    console.log('onRemoveTodo', $event)
  }
}
