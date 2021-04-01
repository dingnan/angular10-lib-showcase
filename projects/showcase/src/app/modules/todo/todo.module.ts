import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TodoPageComponent } from './page/todo-page/todo-page.component'
import { RouterModule, Routes } from '@angular/router'
import { TodoListContainerComponent } from './components/todo-list.container/todo-list.container.component'
import { TodoListComponent } from './components/todo-list/todo-list.component'
import { TodoItemComponent } from './components/todo-item/todo-item.component'

const route: Routes = [{ path: '', component: TodoPageComponent }]

@NgModule({
  declarations: [
    TodoPageComponent,
    TodoListContainerComponent,
    TodoListComponent,
    TodoItemComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(route)],
})
export class TodoModule {}
