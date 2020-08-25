import { Component, OnInit } from '@angular/core';
import { merge, Observable, Subject } from 'rxjs';
import { NgSimpleAlertService, SimpleAlertMessage } from './ng-simple-alert.service';

@Component({
  selector: 'ng-simple-alert',
  templateUrl: './ng-simple-alert.component.html',
  styleUrls: ['./ng-simple-alert.component.scss']
})
export class NgSimpleAlertComponent implements OnInit {
  alertMessage$: Observable<SimpleAlertMessage | boolean>;
  close$ = new Subject<boolean>();

  constructor(private alertService: NgSimpleAlertService) {}

  ngOnInit() {
    this.alertMessage$ = merge(this.alertService.alertMessage$, this.close$);
  }

  closeAlert(): void {
    this.close$.next();
  }
}