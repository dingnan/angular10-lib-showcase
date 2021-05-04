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
  alertMessage$: Observable<SimpleAlertMessage>

  constructor(private alertService: NgSimpleAlertService) {}

  ngOnInit() {
    this.alertMessage$ = this.alertService.alertMessage$
  }

  closeAlert(): void {
    this.alertService.alertMessage$.next(null);
  }
}
