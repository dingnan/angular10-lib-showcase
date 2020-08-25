import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { NgSimpleAlertModule } from '../../../ng-simple-alert/src/lib/ng-simple-alert.module';
import { FlexDemoComponent } from './flex-demo/flex-demo.component';

@NgModule({
  declarations: [AppComponent, FlexDemoComponent],
  imports: [BrowserModule, FlexLayoutModule, NgSimpleAlertModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}