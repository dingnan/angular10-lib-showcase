import { Component, OnInit } from '@angular/core'
import { TodoItem } from 'projects/showcase/src/app/data/schema/todo-item.interface'
import { Observable } from 'rxjs'
import { finalize, map } from 'rxjs/operators'
import { LoggerService } from '../../../shared/services/logger/logger.service'
import { SpinnerOverlayService } from '../../../shared/services/spinner/spinner-overlay.service'
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

  constructor(private todoService: TodoService, private spinnerOverlayService: SpinnerOverlayService, private loggerService: LoggerService) {}

  ngOnInit(): void {
    this.spinnerOverlayService.loading$.next(true);
    this.todoList$ = this.todoService
      .getTodos()
      .pipe(
        map((toDoList: TodoItem[]) => toDoList.slice(0, 10)),
        finalize(() => this.spinnerOverlayService.loading$.next(false))
      )

    this.loggerService.log('TodoListContainerComponent: ngOnInit()')
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
