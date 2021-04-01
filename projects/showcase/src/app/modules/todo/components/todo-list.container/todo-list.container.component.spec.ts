import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoList.ContainerComponent } from './todo-list.container.component';

describe('TodoList.ContainerComponent', () => {
  let component: TodoList.ContainerComponent;
  let fixture: ComponentFixture<TodoList.ContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoList.ContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoList.ContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
