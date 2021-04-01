import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing'

import { NgSimpleAlertComponent } from './simple-alert.component'

describe('NgSimpleAlertComponent', () => {
  let component: NgSimpleAlertComponent
  let fixture: ComponentFixture<NgSimpleAlertComponent>

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [NgSimpleAlertComponent],
      }).compileComponents()
    }),
  )

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSimpleAlertComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
