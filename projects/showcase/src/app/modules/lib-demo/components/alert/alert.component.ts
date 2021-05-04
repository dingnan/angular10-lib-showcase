import { Component, OnInit } from '@angular/core'
import { NgSimpleAlertService } from 'ng-simple-alert'

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  constructor(private alertService: NgSimpleAlertService) {}

  ngOnInit(): void {}

  public createSuccessMessage(): void {
    this.alertService.createSuccessAlert('Sample success message')
  }

  public createDangerMessage(): void {
    this.alertService.createDangerAlert('Sample danger message')
    throw new Error('sample error message')
  }

  public createWarningMessage(): void {
    this.alertService.createWarningAlert('Sample warning message')
  }

  public createInfoMessage(): void {
    this.alertService.createInfoAlert('Sample info message')
  }
}
