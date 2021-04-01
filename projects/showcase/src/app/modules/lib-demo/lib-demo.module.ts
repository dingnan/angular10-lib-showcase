import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AlertComponent } from './components/alert/alert.component'
import { AlertPageComponent } from './page/alert.page.component'
import { NgSimpleAlertModule } from 'ng-simple-alert'
import { RouterModule, Routes } from '@angular/router'
import { SharedModule } from '../../shared/shared.module'

const route: Routes = [{ path: '', component: AlertComponent }]

@NgModule({
  declarations: [AlertComponent, AlertPageComponent],
  imports: [
    CommonModule,
    NgSimpleAlertModule,
    RouterModule.forChild(route),
    SharedModule,
  ],
})
export class LibDemoModule {}
