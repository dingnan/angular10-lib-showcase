import { TestBed, async } from '@angular/core/testing'
import { NgSimpleAlertService } from 'ng-simple-alert'
import { SimpleAlertComponent } from 'ng-simple-alert'
import { AppComponent } from './app.component'
import { FlexDemoComponent } from './flex-demo/flex-demo.component'

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, SimpleAlertComponent, FlexDemoComponent],
      providers: [NgSimpleAlertService],
    }).compileComponents()
  }))

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app).toBeTruthy()
  })

  // it(`should have as title 'ng-alert-showcase'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('ng-alert-showcase');
  // });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('ng-alert-showcase app is running!');
  // });
})
