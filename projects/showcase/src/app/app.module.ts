import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { FlexLayoutModule } from '@angular/flex-layout'
import { AngularMaterialModule } from './shared/material.module'
import { AppComponent } from './app.component'
import { LayoutModule } from './layout/layout.module'
import { FlexDemoComponent } from './flex-demo/flex-demo.component'
import { TodoListComponent } from './todo/todo-list/todo-list.component'
import { TodoItemComponent } from './todo/todo-item/todo-item.component'
import { TodoService } from './todo/todo.service'
import { TodoListContainerComponent } from './todo/todo-list.container/todo-list.container.component'
import { HomeModule } from './modules/home/home.module'
import { AppRoutingModule } from './app-routing.module'

@NgModule({
  declarations: [
    AppComponent,
    FlexDemoComponent,
    TodoListComponent,
    TodoItemComponent,
    TodoListContainerComponent,
  ],
  imports: [
    BrowserModule,
    AngularMaterialModule,
    HttpClientModule,
    AppRoutingModule,
    FlexLayoutModule,
    LayoutModule,
    HomeModule,
  ],
  providers: [TodoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
