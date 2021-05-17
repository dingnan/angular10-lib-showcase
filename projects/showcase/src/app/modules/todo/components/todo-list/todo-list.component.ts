import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  Output,
} from '@angular/core'
import { EventEmitter } from '@angular/core'
import { TodoItem } from 'projects/showcase/src/app/data/schema/todo-item.interface'
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

  newItem: string

  constructor(public spinnerOverlayService: SpinnerOverlayService) {}

  ngOnInit(): void {}

  onKeydown(e) {
    if (e.keyCode === 13) {
      this.todos.push({
        userId: Math.random(),
        id: Math.random(),
        title: this.newItem,
        completed: false
      });
      this.newItem = ''
      this.addTodo.emit('add todo clicked')
    }
  }

  updateTodoItem(todo: TodoItem) {
    this.updateTodo.emit(todo)
  }

  removeTodoItem(todo: TodoItem) {
    const index = this.todos.indexOf(todo);
    if (index > -1) {
      this.todos.splice(index, 1)
      this.removeTodo.emit(todo)
    }
  }
}
