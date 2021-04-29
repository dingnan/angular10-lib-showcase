import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  Output,
} from '@angular/core'
import { EventEmitter } from '@angular/core'
import { TodoItem } from 'projects/showcase/src/app/data/schema/todo-item'
import { SpinnerOverlayService } from '../../../shared/services/spinner/spinner-overlay.service'

/**
 * Presentational Component
 */
@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent implements OnInit {
  @Input() todos: TodoItem[]
  @Output() addTodo: EventEmitter<any> = new EventEmitter<any>()
  @Output() updateTodo: EventEmitter<any> = new EventEmitter<any>()
  @Output() removeTodo: EventEmitter<any> = new EventEmitter<any>()

  constructor(public spinnerOverlayService: SpinnerOverlayService) {}

  ngOnInit(): void {}

  addTodoItem(e) {
    this.addTodo.emit('add todo clicked')
  }

  updateTodoItem(todo: TodoItem) {
    this.updateTodo.emit(todo)
  }

  removeTodoItem(todo: TodoItem) {
    this.removeTodo.emit(todo)
  }
}
