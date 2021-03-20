import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularMaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { NgSimpleAlertModule } from '../../../ng-simple-alert/src/lib/ng-simple-alert.module';
import { FlexDemoComponent } from './flex-demo/flex-demo.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoItemComponent } from './todo/todo-item/todo-item.component';
import { TodoService } from './todo/todo.service';
import { TodoListContainerComponent } from './todo/todo-list.container/todo-list.container.component';

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
    FlexLayoutModule,
    NgSimpleAlertModule,
  ],
  providers: [TodoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
