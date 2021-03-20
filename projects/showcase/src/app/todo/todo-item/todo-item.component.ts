import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { TodoItem } from '../../models/todo-item';

/**
 * Presentational Component
 */
@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoItemComponent implements OnInit {
  @Input() todo: TodoItem;

  constructor() { }

  ngOnInit(): void {
  }

}
