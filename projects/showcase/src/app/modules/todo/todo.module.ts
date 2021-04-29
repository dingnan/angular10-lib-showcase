import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TodoPageComponent } from './page/todo-page/todo-page.component'
import { RouterModule, Routes } from '@angular/router'
import { TodoListContainerComponent } from './components/todo-list.container/todo-list.container.component'
import { TodoListComponent } from './components/todo-list/todo-list.component'
import { TodoItemComponent } from './components/todo-item/todo-item.component'
import { ItemDetailComponent } from './components/item-detail/item-detail.component'
import { SharedModule } from '../shared/shared.module'

const route: Routes = [
  { path: '', component: TodoPageComponent },
  { path: ':id', component: ItemDetailComponent },
]

@NgModule({
  declarations: [
    TodoPageComponent,
    TodoListContainerComponent,
    TodoListComponent,
    TodoItemComponent,
    ItemDetailComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(route), SharedModule],
})
export class TodoModule {}
