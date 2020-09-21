import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularMaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { NgSimpleAlertModule } from '../../../ng-simple-alert/src/lib/ng-simple-alert.module';
import { FlexDemoComponent } from './flex-demo/flex-demo.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoItemComponent } from './todo/todo-item/todo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    FlexDemoComponent,
    TodoListComponent,
    TodoItemComponent,
  ],
  imports: [
    BrowserModule,
    AngularMaterialModule,
    FlexLayoutModule,
    NgSimpleAlertModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
