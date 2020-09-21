import { Component, ViewChild } from '@angular/core';
import { NgSimpleAlertService } from '../../../ng-simple-alert/src/lib/ng-simple-alert.service';
import { FlexDemoComponent } from './flex-demo/flex-demo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(FlexDemoComponent) flexDemo;
  tiles: number;

  constructor(private alertService: NgSimpleAlertService) {}

  ngAfterViewInit() {
    this.tiles = this.flexDemo.numberOfTiles;
  }

  public createSuccessMessage(): void {
    this.alertService.createSuccessAlert('Sample success message');
  }

  public createDangerMessage(): void {
    this.alertService.createDangerAlert('Sample danger message');
  }

  public createWarningMessage(): void {
    this.alertService.createWarningAlert('Sample warning message');
  }

  public createInfoMessage(): void {
    this.alertService.createInfoAlert('Sample info message');
  }
}
