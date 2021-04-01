import { Component, OnInit } from '@angular/core'
import { merge, Observable, Subject } from 'rxjs'
import {
  NgSimpleAlertService,
  SimpleAlertMessage,
} from './ng-simple-alert.service'

@Component({
  selector: 'simple-alert',
  templateUrl: './simple-alert.component.html',
  styleUrls: ['./simple-alert.component.scss'],
})
export class SimpleAlertComponent implements OnInit {
  alertMessage$: Observable<SimpleAlertMessage | boolean>
  close$ = new Subject<boolean>()

  constructor(private alertService: NgSimpleAlertService) {}

  ngOnInit() {
    this.alertMessage$ = merge(this.alertService.alertMessage$, this.close$)
  }

  closeAlert(): void {
    this.close$.next()
  }
}
