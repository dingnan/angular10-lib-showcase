import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Alert.PageComponent } from './alert.page.component';

describe('Alert.PageComponent', () => {
  let component: Alert.PageComponent;
  let fixture: ComponentFixture<Alert.PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Alert.PageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Alert.PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
